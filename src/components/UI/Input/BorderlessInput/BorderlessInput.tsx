import React from 'react';
import classes from './BorderlessInput.module.scss';

interface BorderlessInputProps {
  placeholder?: string;
}

export const BorderlessInput: React.FC<BorderlessInputProps> = ({ placeholder }) => {
  return (
    <div className={classes['borderless-input']}>
      <input type="text" className={classes['borderless-input__field']} placeholder={placeholder} />
    </div>
  );
};
