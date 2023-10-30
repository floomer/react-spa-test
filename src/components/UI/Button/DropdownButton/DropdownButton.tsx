import React from 'react';
import classes from './DropdownButton.module.scss';

interface DropdownButtonProps {
  onClick: () => void;
}
export const DropdownButton: React.FC<DropdownButtonProps> = ({ onClick }) => {
  return <button className={classes['drop-button']} onClick={onClick} />;
};
