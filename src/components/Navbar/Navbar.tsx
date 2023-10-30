import React from 'react';
import classes from './Navbar.module.scss';
import Logo from '../../assets/logo_sign.svg';
import favorite from '../../assets/favorite.svg';
import notification from '../../assets/notification.svg';
import userPhoto from '../../assets/user_photo.jpg';
export const Navbar = () => {
  return (
    <div className={classes['navbar']}>
      <div className={classes['navbar__company-info']}>
        <div className={classes['navbar__company-info__logo']}>
          <img src={Logo} />
        </div>
        <div className="navbar__company-info__name">
          <span>at-</span>
          <span>work</span>
        </div>
      </div>
      <div className={classes['navbar__user-block']}>
        <div className={classes['navbar__user-actions']}>
          <img src={favorite} />
          <img src={notification} />
        </div>
        <div className={classes['navbar__user-profile']}>
          <img src={userPhoto} />
          <span>Иванов Иван</span>
        </div>
      </div>
    </div>
  );
};
