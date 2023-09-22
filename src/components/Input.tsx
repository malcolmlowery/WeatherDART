import { ChangeEventHandler } from 'react';
import './c_styles/input.component.css';

interface InputI {
  htmlFor: string;
  label: string;
  type: 'password' | 'email';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  htmlFor,
  label,
  type = 'password',
  onChange,
  value,
}: InputI) => {
  return (
    <div className='input-container'>
      <label className='input-container__label' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className='input-container__input'
        id={htmlFor}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
