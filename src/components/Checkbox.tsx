import { ChangeEventHandler } from 'react';
import './c_styles/checkbox.component.css';

interface CheckboxI {
  value: string;
  htmlFor?: string;
  label?: string;
  reverseOrder?: 'checkbox-first' | 'label-first';
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({
  htmlFor,
  label,
  onChange,
  reverseOrder = 'checkbox-first',
  value,
}: CheckboxI) => {
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
        className='checkbox-container__checkbox'
        id={htmlFor}
        onChange={onChange}
        type='checkbox'
        value={value}
      />
    </div>
  );
};

export default Checkbox;
