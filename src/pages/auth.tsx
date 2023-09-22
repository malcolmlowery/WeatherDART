import { useState } from 'react';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import './p_styles/auth.page.css';

const AuthPage = () => {
  const [createAccount, setCreateAccount] = useState(true);

  return (
    <div className='auth-container'>
      <div className='auth-container__left-side'>
        <div className='auth-container__left-side__bg-image'></div>
      </div>

      <div className='auth-container__right-side'>
        <div className='auth-container__right-side__content'>
          <h1 className='auth-container__right-side__content_title'>
            {createAccount ? 'Sign Up' : 'Login'}
          </h1>

          {createAccount ? (
            <p>Provide the following information to get started!</p>
          ) : (
            <p>Please log in to access your account</p>
          )}

          <form className='auth-container__right-side__content__form'>
            <Input
              htmlFor='email'
              label='Email'
              type='email'
              onChange={(e) => console.log(e.target.value)}
              value='malcolmlowery.developer@gmail.com'
            />

            <Input
              htmlFor='password'
              label='Password'
              type='password'
              onChange={(e) => console.log(e.target.value)}
              value='1234567890'
            />

            {createAccount && (
              <Input
                htmlFor='zipcode'
                label='Zip code'
                type='text'
                onChange={(e) => console.log(e.target.value)}
                value='46226'
              />
            )}

            <div className='auth-container__right-side__content__form__item__remember-forgot'>
              <Checkbox
                htmlFor='remeber_me'
                label='Remember me'
                onChange={(e) => console.log(e.target.value)}
                value='true'
              />

              {!createAccount && (
                <button className='button button--clear'>
                  Forgot Password
                </button>
              )}
            </div>

            <Button>{createAccount ? 'Sign Up' : 'Login'}</Button>
          </form>

          {!createAccount && (
            <p className='auth-container__right-side__content__account'>
              Don't have an account?{' '}
              <a href='#' onClick={() => setCreateAccount(!createAccount)}>
                Sign Up
              </a>
            </p>
          )}

          {createAccount && (
            <p className='auth-container__right-side__content__account'>
              Have an account?{' '}
              <a href='#' onClick={() => setCreateAccount(!createAccount)}>
                Log in
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
