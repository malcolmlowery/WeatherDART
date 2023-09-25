import { ChangeEventHandler } from 'react';
import './c_styles/checkbox.component.css';
import { UseFormHookI } from '../types/form.interface';

interface CheckboxI {
  checked: boolean;
  htmlFor: string;
  label?: string;
  reverseOrder?: 'checkbox-first' | 'label-first';
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({
  checked,
  htmlFor,
  label,
  onChange,
  reverseOrder = 'checkbox-first',
  register,
}: CheckboxI & UseFormHookI) => {
  return (
    <div
      className='checkbox-container'
      style={{
        flexDirection:
          reverseOrder === 'checkbox-first' ? 'row-reverse' : 'row',
      }}
    >
      {label && (
        <label className='checkbox-container__label' htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        {...register(htmlFor, { required: false })}
        className='checkbox-container__checkbox'
        checked={checked}
        id={htmlFor}
        onChange={onChange}
        type='checkbox'
      />
    </div>
  );
};

export default Checkbox;
