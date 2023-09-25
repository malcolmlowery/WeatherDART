import { BaseSyntheticEvent, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { confirmSignUp } from '../utils/auth';

// Components and Styles
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import './p_styles/auth.page.css';

// Types
import { UserAuthCredentialsI } from '../types/user.interface';

const AuthPage = () => {
  const { user, signIn, signUp } = useContext(AuthContext);
  const [createAccount, setCreateAccount] = useState(false);
  const [userAccountCreated, setUserAccountCreated] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [accountVerified, setAccountVerified] = useState(false);

  const [userInfo, setUserInfo] = useState<UserAuthCredentialsI>({
    email: '',
    password: '',
    zipcode: '',
    remember_user: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async () => {
    const { email, password } = userInfo;
    try {
      if (createAccount) {
        await signUp(email, password);
        setUserAccountCreated(true);
        return;
      } else {
        await signIn(email, password);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirmSignup = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    try {
      const { email, password } = userInfo;
      await confirmSignUp(userInfo.email, verificationCode).then(() => {
        setTimeout(async () => {
          await signIn(email, password);
        }, 2000);
      });
      setAccountVerified(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (user) {
    return <Navigate to='/dashboard' />;
  }

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

          {userAccountCreated ? (
            <h1 className='auth-container__right-side__content__text'>
              Confirm Sign Up
            </h1>
          ) : (
            <h1 className='auth-container__right-side__content__text'>
              {createAccount ? 'Sign Up' : 'Login'}
            </h1>
          )}

          {userAccountCreated ? (
            <p className='auth-container__right-side__content__text'>
              Please provide the verification code that was sent to your email.
            </p>
          ) : (
            <>
              {createAccount ? (
                <p className='auth-container__right-side__content__text'>
                  Provide the following information to get started!
                </p>
              ) : (
                <p className='auth-container__right-side__content__text'>
                  Please log in to access your account
                </p>
              )}
            </>
          )}

          <form
            className='auth-container__right-side__content__form'
            onSubmit={
              userAccountCreated
                ? handleConfirmSignup
                : handleSubmit(submitForm)
            }
          >
            <Input
              errors={errors}
              disabled={userAccountCreated}
              htmlFor='email'
              label='Email'
              type='email'
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              register={register}
              value={userInfo.email}
            />

            {!userAccountCreated && (
              <>
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

                <Button type='submit' status='normal'>
                  {createAccount ? 'Sign Up' : 'Login'}
                </Button>
              </>
            )}

            {userAccountCreated && (
              <>
                <Input
                  errors={errors}
                  disabled={accountVerified}
                  htmlFor='code'
                  label='Code'
                  type='number'
                  onChange={(e) => setVerificationCode(e.target.value)}
                  register={register}
                  value={verificationCode}
                />

                <Button
                  disabled={accountVerified}
                  style={{ marginTop: 50 }}
                  status={accountVerified ? 'success' : 'normal'}
                  type='submit'
                >
                  {accountVerified ? 'Account Verified!' : 'Confirm Code'}
                </Button>
              </>
            )}
          </form>

          {!userAccountCreated && (
            <>
              {!createAccount && (
                <p className='auth-container__right-side__content__account'>
                  Don't have an account?{' '}
                  <a onClick={() => setCreateAccount(!createAccount)}>
                    Sign Up
                  </a>
                </p>
              )}

              {createAccount && (
                <p className='auth-container__right-side__content__account'>
                  Have an account?{' '}
                  <a onClick={() => setCreateAccount(!createAccount)}>Log in</a>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
