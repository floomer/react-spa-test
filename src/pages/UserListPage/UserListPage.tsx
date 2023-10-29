import React, { useEffect } from 'react';
import { UserCard } from '../../components/UserCard/UserCard';
import classes from './UserListPage.module.scss';
import { useFetching } from '../../hooks/useFetching';
import { UserService } from '../../api/userService';
import { Loader } from '../../components/ui/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addUser } from '../../store/user/userSlice';
import { getUniqueUsers } from '../../utils/getUniqueUsers';

export const UserListPage = () => {
  const users = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [fetching, isLoading] = useFetching(async () => {
    const response = await UserService.getUsers();
    const restUsers = getUniqueUsers(response, users);
    dispatch(addUser(restUsers));
  });

  useEffect(() => {
    fetching();
  }, []);
  return (
    <>
      <div className={classes.users}>
        <div className={classes['users__title']}>
          <span className={classes['users__title-text']}>Активные</span>
        </div>
        <div className={classes['users__active']}>
          <div className={classes['users__active-list']}>
            {isLoading ? (
              <Loader />
            ) : (
              users.map((user) => {
                if (!user.isArchived) {
                  return <UserCard key={user.id} user={user} />;
                }
              })
            )}
          </div>
        </div>
        <div className={classes['users__title']}>
          <span className={classes['users__title-text']}>Архив</span>
        </div>
        <div className={classes['users__archive']}>
          <div className={classes['users__archive-list']}>
            {isLoading ? (
              <Loader />
            ) : (
              users.map((user) => {
                if (user.isArchived) {
                  return <UserCard key={user.id} user={user} isArchive={true} />;
                }
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};
