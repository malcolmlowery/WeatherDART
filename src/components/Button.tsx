import React, { FormEventHandler, MouseEventHandler } from 'react';
import './c_styles/button.component.css';

interface ButtonI {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  status?: 'normal' | 'success';
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  disabled = false,
  children,
  onClick,
  onSubmit,
  style,
  status,
  type = 'button',
}: ButtonI) => {
  return (
    <div
      className={`button-container button-container--${status}`}
      style={style}
    >
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className='button-container__button'
        onSubmit={onSubmit}
      >
        <p className='button-container__button__text'>{children}</p>
      </button>
    </div>
  );
};

export default Button;
