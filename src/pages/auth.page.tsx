import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components and Styles
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import './p_styles/auth.page.css';

// Types
import { UserAuthCredentialsI } from '../types/user.interface';

const AuthPage = () => {
  const navigate = useNavigate();
  const [createAccount, setCreateAccount] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userInfo, setUserInfo] = useState<UserAuthCredentialsI>({
    email: '',
    password: '',
    zipcode: '',
    remember_user: false,
  });

  const submitForm = () => {
    if (createAccount) {
      return;
    } else {
      return navigate('/dashboard', { replace: true });
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-container__left-side'>
        <div className='auth-container__left-side__bg-image'></div>
        <div className='auth-container__left-side__content'>
          <h1 className='auth-container__left-side__content__title'>
            WeatherDART
          </h1>
          <p className='auth-container__left-side__content__description'>
            A all-in-one weather website, offering a comprehensive view of past,
            present, and future weather conditions, complete with real-time
            weather alerts for the entire United States!
          </p>
        </div>
      </div>

      <div className='auth-container__right-side'>
        <div className='auth-container__right-side__content'>
          <h1 className='auth-container__right-side__content__title'>
            WeatherDART
          </h1>

          <hr
            color='#5152f4'
            className='auth-container__right-side__content__line-divider'
          />
          <h1 className='auth-container__right-side__content__text'>
            {createAccount ? 'Sign Up' : 'Login'}
          </h1>

          {createAccount ? (
            <p className='auth-container__right-side__content__text'>
              Provide the following information to get started!
            </p>
          ) : (
            <p className='auth-container__right-side__content__text'>
              Please log in to access your account
            </p>
          )}

          <form
            className='auth-container__right-side__content__form'
            onSubmit={handleSubmit(submitForm)}
          >
            <Input
              errors={errors}
              htmlFor='email'
              label='Email'
              type='email'
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              register={register}
              value={userInfo.email}
            />

            <Input
              errors={errors}
              htmlFor='password'
              label='Password'
              type='password'
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              register={register}
              value={userInfo.password}
            />

            {createAccount && (
              <Input
                errors={errors}
                htmlFor='zipcode'
                label='Zip code'
                type='number'
                onChange={(e) =>
                  setUserInfo({ ...userInfo, zipcode: e.target.value })
                }
                register={register}
                value={userInfo.zipcode}
              />
            )}

            <div className='auth-container__right-side__content__form__item__remember-forgot'>
              <Checkbox
                htmlFor='remeber_me'
                label='Remember me'
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    remember_user: e.target.checked,
                  })
                }
                checked={userInfo.remember_user}
                register={register}
              />

              {!createAccount && (
                <button className='button button--clear' type='submit'>
                  Forgot Password
                </button>
              )}
            </div>

            <Button type='submit'>{createAccount ? 'Sign Up' : 'Login'}</Button>
          </form>

          {!createAccount && (
            <p className='auth-container__right-side__content__account'>
              Don't have an account?{' '}
              <a onClick={() => setCreateAccount(!createAccount)}>Sign Up</a>
            </p>
          )}

          {createAccount && (
            <p className='auth-container__right-side__content__account'>
              Have an account?{' '}
              <a onClick={() => setCreateAccount(!createAccount)}>Log in</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
