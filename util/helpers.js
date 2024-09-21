export const getLastAndNext7Days = currentDate => {
  const dates = [];

  for (let i = 7; i > 0; i--) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
    dates.push({ date, label: formatDate(date) });
  }

  dates.push({ date: currentDate, label: 'Today' });

  for (let i = 1; i <= 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push({ date, label: formatDate(date) });
  }

  return dates;
};

export const formatDate = date => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const weekday = date.toLocaleDateString('en-GB', { weekday: 'short' });

  return `${day}/${month} ${weekday}`;
};

export const formatMatchDate = utcDate => {
  const dateObj = new Date(utcDate);
  const day = String(dateObj.getUTCDate()).padStart(2, '0');
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  const year = dateObj.getUTCFullYear();

  return `${day}.${month}.${year}`;
};

export const formatTime = utcDate => {
  const date = new Date(utcDate);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatScore = score => {
  if (!score || !score.fullTime) {
    return '- : -';
  }
  const home = score.fullTime.home !== null ? score.fullTime.home : '-';
  const away = score.fullTime.away !== null ? score.fullTime.away : '-';
  return `${home} : ${away}`;
};

const formatDateForComparison = isoDate => {
  const date = new Date(isoDate);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}/${month}`;
};

export const areDatesEqual = (isoDate, label) => {
  const labelDate = label.split(' ')[0];

  const formattedDate = formatDateForComparison(isoDate);
  const formatedToday = formatDateForComparison(new Date());

  return formattedDate === labelDate || (label === 'Today' && formattedDate === formatedToday);
};

export const timestampToTime = timestamp => {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours();

  const minutes = '0' + date.getMinutes();

  const seconds = '0' + date.getSeconds();

  const formattedTime = hours + ':' + minutes.slice(-2);

  return formattedTime;
};

export const timestampToDate = timestamp => {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const todayFormattedDate = () => {
  const today = new Date();
  const todayFormattedDate = `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${(
    '0' + today.getDate()
  ).slice(-2)}`;
  return todayFormattedDate;
};
