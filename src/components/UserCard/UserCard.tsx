import React, { useState } from 'react';
import classes from './UserCard.module.scss';
import { IUser } from '../../types/IUser';
import userPhoto from '../../assets/user_photo.jpg';
import { DropdownButton } from '../UI/Button/DropdownButton/DropdownButton';
import classNames from 'classnames';
import { Dropdown } from '../UI/Dropdown/Dropdown';

interface UserCardProps {
  user: IUser;
  isArchive?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({ user, isArchive }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={classNames(classes['user-card'], {
        [classes['user-card__archive']]: isArchive,
      })}>
      <div className={classes['user-card__avatar']}>
        <img src={userPhoto} className={classes['user-card__img']} />
      </div>
      <div className={classes['user-card__info']}>
        <div className="user-card__info-block">
          <span className={classes['user-card__info-name']}>{user.name}</span>
          <span className={classes['user-card__info-company']}>{user.company.name}</span>
        </div>
        <div className={classes['user-card__location']}>{user.address.city}</div>
      </div>
      <div className={classes['user-card__actions']}>
        <DropdownButton onClick={() => setVisible(!visible)} />
        <Dropdown visible={visible} isArchive={isArchive} id={user.id}></Dropdown>
      </div>
    </div>
  );
};
