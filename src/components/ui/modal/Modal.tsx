import React from 'react';
import classes from './Modal.module.scss';
import classNames from 'classnames';
import SuccessIcon from '../../../assets/Checked-box.svg';
import crossIcon from '../../../assets/Cross.svg';
import { useNavigate } from 'react-router-dom';
interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  setTimeout(() => {
    onClose();
  }, 6000);
  return (
    <div className={classNames(classes.modal, { [classes['modal__active']]: visible })}>
      <div className={classes['modal__content']}>
        <img src={crossIcon} className={classes['modal__cross-icon']} onClick={onClose} />
        <img src={SuccessIcon} />
        <span className={classes['modal__content-title']}>Изменения сохранены!</span>
      </div>
    </div>
  );
};
