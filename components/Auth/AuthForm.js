'use client'; 

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import classes from './AuthForm.module.css'; 

const AuthForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [data, setData] = useState(null); 
  const searchParams = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setData({ message: isLogin ? 'Login successful!' : 'Registration successful!' });
      if (isLogin) {
        router.push('/');
      }
    }, 1500);
  };

  return (
    <div className={classes['form-container']}>
      <div className={classes.header}>
        <h1 className={classes.title}>{isLogin ? 'Sign in to your account' : 'Create an Account'}</h1>
        <h2 className={classes.subtitle}>{isLogin ? 'Sign in to your account' : 'Register to continue'}</h2>

        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <div className={classes['form-group']}>
            <input type="text" id="full-name" name="full-name" placeholder=" " required />
            <label htmlFor="full-name">Full Name</label>
          </div>
        )}

        <div className={classes['form-group']}>
          <input type="email" id="email" name="email" placeholder=" " required />
          <label htmlFor="email">Email</label>
        </div>

        <div className={`${classes['form-group']} ${classes['password-group']}`}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder=" "
            required
          />
          <label htmlFor="password">Password</label>
          <span className={classes['password-toggle']} onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button disabled={isSubmitting} className={isLogin ? classes['login-btn'] : classes['register-btn']}>
          {isSubmitting ? 'Submitting...' : isLogin ? 'Login' : 'Register'}
        </button>

        <div className={classes.divider}>
          <hr />
        </div>

        <div className={classes['social-login']}>
          <button type="button" className={classes['google-btn']}>
            {isLogin ? 'Login with Google' : 'Register with Google'}
          </button>
          <button type="button" className={classes['facebook-btn']}>
            {isLogin ? 'Login with Facebook' : 'Register with Facebook'}
          </button>
        </div>

        <div className={classes['register-link']}>
          <span>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <Link href={`?mode=${isLogin ? 'signup' : 'login'}`}>
              {isLogin ? 'Register' : 'Sign In'}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
