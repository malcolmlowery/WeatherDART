import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface UseFormHookI {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
}
