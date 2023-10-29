import React, { useEffect, useState } from 'react';
import classes from './EditUserPage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import userPhoto from '../../assets/user_photo.jpg';
import { BorderedInput } from '../../components/ui/input/BorderedInput/BorderedInput';
import { SubmitButton } from '../../components/ui/button/SubmitButton/SubmitButton';
import { BorderlessInput } from '../../components/ui/input/BorderlessInput/BorderlessInput';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useFetching } from '../../hooks/useFetching';
import { UserService } from '../../api/userService';
import { addOneUser, editUser } from '../../store/user/userSlice';
import { Loader } from '../../components/ui/loader/Loader';
import { IUser } from '../../types/IUser';
import { Modal } from '../../components/ui/modal/Modal';

export const EditUserPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user_id = location.pathname.split('/')[1];
  const users = useAppSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const onSubmit: SubmitHandler<IUser> = (data) => {
    dispatch(editUser(data));
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
    navigate('/');
  };
  const [fetching, isLoading] = useFetching(async () => {
    const response = await UserService.getUserById(+user_id);
    dispatch(addOneUser(response));
  });
  const user = users.find((user) => user.id === +user_id);
  const methods = useForm<IUser>({
    defaultValues: user,
  });
  useEffect(() => {
    if (!users.length) {
      fetching();
    }
    methods.reset(user);
  }, [user]);

  return (
    <div className={classes['edit-user']}>
      {visible && <Modal visible={visible} onClose={handleClose} />}
      <div className={classes['edit-user__header']}>
        <button className={classes['edit-user__header-btn']} onClick={() => navigate('/')}></button>
        <span className={classes['edit-user__header-title']}>Назад</span>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes['edit-user__data']}>
          <div className={classes['edit-user__data-settings']}>
            <div className={classes['edit-user__data-settings-avatar']}>
              <img src={userPhoto} className={classes['edit-user__data-settings-avatar-img']} />
            </div>
            <div className={classes['edit-user__data-settings-categories']}>
              <span className={classes['edit-user__data-settings-categories-title']}>
                Данные профиля
              </span>
              <BorderlessInput placeholder={'Рабочее пространство'} />
              <BorderlessInput placeholder={'Приватность'} />
              <BorderlessInput placeholder={'Безопасность'} />
            </div>
          </div>
          <div className={classes['edit-user__data-profile']}>
            <div className={classes['edit-user__data-profile-title']}>
              <span>Данные профиля</span>
            </div>
            <div className={classes['edit-user__data-profile-edit']}>
              {user ? (
                <FormProvider {...methods}>
                  <form
                    className={classes['edit-user__data-profile-edit-text']}
                    onSubmit={methods.handleSubmit(onSubmit)}>
                    <BorderedInput
                      label="Имя"
                      name="name"
                      control={methods.control}
                      rules={{ required: 'Обязательное поле' }}
                    />
                    <BorderedInput
                      name={'username'}
                      label={'Никнейм'}
                      control={methods.control}
                      rules={{ required: 'Обязательное поле' }}
                    />
                    <BorderedInput
                      name={'email'}
                      label={'Почта'}
                      control={methods.control}
                      rules={{ required: 'Обязательное поле' }}
                    />
                    <BorderedInput
                      name={'address.city'}
                      label={'Город'}
                      control={methods.control}
                      rules={{ required: 'Обязательное поле' }}
                    />
                    <BorderedInput
                      name={'phone'}
                      label={'Телефон'}
                      control={methods.control}
                      rules={{ required: 'Обязательное поле' }}
                    />
                    <BorderedInput
                      name={'company.name'}
                      label={'Название компании'}
                      control={methods.control}
                      rules={{ required: 'Обязательное поле' }}
                    />
                    <SubmitButton label={'Сохранить'} />
                  </form>
                </FormProvider>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
