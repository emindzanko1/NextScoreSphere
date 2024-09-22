import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const index = searchParams.get('index');

  try {
    const matchesFile = await fs.readFile(process.cwd() + '/lib/data/matches.json', 'utf8');
    const data = JSON.parse(matchesFile);
    const today = new Date();
    let matches = [];

    switch (parseInt(index)) {
      case 0:
        for (const matchObject of data.matches) {
          const todayMatches = matchObject.matches.filter(match => {
            const matchDate = new Date(match.utcDate);

            const isToday =
              matchDate.getUTCFullYear() === today.getUTCFullYear() &&
              matchDate.getUTCMonth() === today.getUTCMonth() &&
              matchDate.getUTCDate() === today.getUTCDate();

            return isToday;
          });

          matches.push(...todayMatches);
        }
        break;
      case 1:
        for (const matchObject of data.matches) {
          const matchesForInProgressToday = matchObject.matches.filter(match => {
            const matchDate = new Date(match.utcDate);

            const isToday =
              matchDate.getUTCFullYear() === today.getUTCFullYear() &&
              matchDate.getUTCMonth() === today.getUTCMonth() &&
              matchDate.getUTCDate() === today.getUTCDate();

            return isToday && (match.status === 'IN_PLAY' || match.status === 'LIVE');
          });

          matches.push(...matchesForInProgressToday);
        }
        break;
      case 2:
        for (const matchObject of data.matches) {
          const matchesForPastToday = matchObject.matches.filter(match => {
            const matchDate = new Date(match.utcDate);

            const isToday =
              matchDate.getUTCFullYear() === today.getUTCFullYear() &&
              matchDate.getUTCMonth() === today.getUTCMonth() &&
              matchDate.getUTCDate() === today.getUTCDate();

            return isToday && match.status === 'FINISHED';
          });

          matches.push(...matchesForPastToday);
        }
        break;
      case 3:
        for (const matchObject of data.matches) {
          const matchesForFutureToday = matchObject.matches.filter(match => {
            const matchDate = new Date(match.utcDate);

            const isToday =
              matchDate.getUTCFullYear() === today.getUTCFullYear() &&
              matchDate.getUTCMonth() === today.getUTCMonth() &&
              matchDate.getUTCDate() === today.getUTCDate();

            return isToday && match.status === 'TIMED';
          });

          matches.push(...matchesForFutureToday);
        }
        break;
      default:
        matches = [];
        break;
    }

    if (data === undefined) {
      throw new Error('Data is undefined');
    }

    return NextResponse.json(matches);
  } catch (error) {
    console.error('Error reading matches:', error);
    return NextResponse.error();
  }
}
