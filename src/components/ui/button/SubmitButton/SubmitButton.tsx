import React from 'react';
import classes from './SubmitButton.module.scss';

interface SubmitButtonProps {
  label: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return (
    <button className={classes['sub-button']} type="submit">
      {label}
    </button>
  );
};
