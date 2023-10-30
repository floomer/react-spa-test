import React from 'react';
import classes from './Dropdown.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { archiveUser, hideUser, unArchiveUser } from '../../../store/user/userSlice';

interface DropdownProps {
  visible: boolean;
  isArchive?: boolean;
  id: number;
}
export const Dropdown: React.FC<DropdownProps> = ({ visible, isArchive, id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={classNames(classes.dropdown, {
        [classes['dropdown__active']]: visible,
      })}>
      <ul className={classes['dropdown__list']}>
        {isArchive ? (
          <li
            onClick={() => {
              dispatch(unArchiveUser(id));
            }}>
            Активировать
          </li>
        ) : (
          <>
            <li
              onClick={() => {
                navigate(`/${id}`);
              }}>
              Редактировать
            </li>
            <li
              onClick={() => {
                dispatch(archiveUser(id));
              }}>
              Архивировать
            </li>
            <li
              onClick={() => {
                dispatch(hideUser(id));
              }}>
              Скрыть
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
