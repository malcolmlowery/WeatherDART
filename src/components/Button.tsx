import { MouseEventHandler } from 'react';
import './c_styles/button.component.css';

interface ButtonI {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ disabled = false, children, onClick }: ButtonI) => {
  return (
    <div className='button-container'>
      <button
        disabled={disabled}
        onClick={onClick}
        className='button-container__button'
      >
        <p className='button-container__button__text'>{children}</p>
      </button>
    </div>
  );
};

export default Button;
