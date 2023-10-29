import React, { useState } from 'react';
import classes from './BorderedInput.module.scss';
import crossIcon from '../../../../assets/Cross.svg';
import { useController, useFormContext } from 'react-hook-form';

export const BorderedInput = (props: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const { field, fieldState } = useController(props);
  const methods = useFormContext();

  const handleFocus = () => {
    setIsFocused(true);
  };
  return (
    <div className={classes.input}>
      <label className={classes['input__label']}>{props.label}</label>
      <input
        className={classes['input__field']}
        type="text"
        placeholder={props.label}
        onFocus={handleFocus}
        {...field}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      {fieldState.error && (
        <span className={classes['input__error']}>{fieldState.error.message}</span>
      )}
      {field.value && isFocused ? (
        <img
          src={crossIcon}
          className={classes['input__icon']}
          onMouseDown={(e) => {
            e.preventDefault();
            methods.setValue(field.name, '');
          }}
        />
      ) : null}
    </div>
  );
};
