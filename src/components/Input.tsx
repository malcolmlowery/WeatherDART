import { ChangeEventHandler } from 'react';
import './c_styles/input.component.css';
import { UseFormHookI } from '../types/errors.interface';

interface InputI {
  htmlFor: string;
  label: string;
  type: 'text' | 'password' | 'email' | 'number';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  errors,
  htmlFor,
  label,
  onChange,
  type,
  register,
  value,
}: InputI & UseFormHookI) => {
  console.log(htmlFor);
  return (
    <div className='input-container'>
      <label className='input-container__label' htmlFor={htmlFor}>
        {label}
      </label>

      <input
        {...register(htmlFor, { required: `Please enter a valid ${htmlFor}` })}
        className='input-container__input'
        id={htmlFor}
        onChange={onChange}
        type={type}
        value={value}
      />

      {errors && (
        <p className='input-container__warning'>
          {htmlFor === 'email' && errors.email?.message?.toString()}
          {htmlFor === 'password' && errors.password?.message?.toString()}
          {htmlFor === 'zipcode' &&
            errors.zipcode &&
            'Please enter a valid zip code'}
        </p>
      )}
    </div>
  );
};

export default Input;
