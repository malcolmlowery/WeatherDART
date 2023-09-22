import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import '../styles/auth.css';

const AuthPage = () => {
  return (
    <div className='auth-container'>
      <div className='auth-container__left-side'></div>
      <div className='auth-container__right-side'>
        <div className='auth-container__right-side__content'>
          <h1 className='auth-container__right-side__content_title'>Login</h1>
          <p>Please log in to access your account</p>

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

            <div className='auth-container__right-side__content__form__item__remember-forgot'>
              <Checkbox
                htmlFor='remeber_me'
                label='Remember me'
                onChange={(e) => console.log(e.target.value)}
                value='true'
              />

              <button className='button button--clear'>Forgot Password</button>
            </div>

            <Button>Login</Button>
          </form>

          <p className='auth-container__right-side__content__account'>
            Don't have an account? <a href='#'>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
