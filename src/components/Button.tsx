import React, { FormEventHandler, MouseEventHandler } from 'react';
import './c_styles/button.component.css';

interface ButtonI {
  backgroundColor?: 'primary' | 'secondary' | 'transparent';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  status?: 'normal' | 'success';
  size?: 'block' | 'fit-content';
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  backgroundColor = 'primary',
  disabled = false,
  children,
  onClick,
  onSubmit,
  style,
  status = 'normal',
  size = 'block',
  type = 'button',
}: ButtonI) => {
  return (
    <div
      className={`button-container button-container--bg-color--${backgroundColor} button-container--${status} button-container--${size}`}
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
