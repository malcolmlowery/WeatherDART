import { MouseEventHandler } from 'react';
import './c_styles/button.component.css';

interface ButtonI {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  disabled = false,
  children,
  onClick,
  type = 'button',
}: ButtonI) => {
  return (
    <div className='button-container'>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className='button-container__button'
      >
        <p className='button-container__button__text'>{children}</p>
      </button>
    </div>
  );
};

export default Button;
