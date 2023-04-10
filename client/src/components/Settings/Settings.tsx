import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { FileUploader } from 'react-drag-drop-files';
import { authAsyncActions, signOut } from '../../redux-slices/auth-slice';
import { S } from './styles';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserDataSelector } from '../../selectors/selectors';
import { ERoutes } from '../../CONST/list-local-routes/routes';
import { useTranslation } from 'react-i18next';
import { getFromStorage } from '../../services/local-session-storage/service-localStorage';
import { STORAGE_NAME } from '../../CONST/key-localStorage';
import { profile } from '../../assets/images/files';

interface ISettingsProps {
  setOpenModal: () => void;
}

export const Settings: React.FC<ISettingsProps> = ({ setOpenModal }) => {
  const history = useHistory();
  const { innerBorderRef } = useOnOutsideClick(setOpenModal);
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserDataSelector);
  const [file, setSelectFile] = useState('');
  const { t } = useTranslation(['common']);
  const logoutHandler = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    dispatch(signOut());
    history.push('/');
  };
  const { userId } = getFromStorage(STORAGE_NAME);

  const onChangePhoto = async (img: ChangeEvent) => {
    // const target = event.target as HTMLInputElement;
    // const files = target.files as FileList;
    // console.log('inside onChangePhoto', files);

    // for (let i = 0; i < files.length; i++) {
    //   const reader = new FileReader();
    //   const formatedFile = files[i];
    //   reader.onload = () => {
    //     console.log('inside onload', files);
    //     dispatch(authAsyncActions.updateAction({ files: reader.result as string, id: userId }));
    //   };
    //   reader.readAsDataURL(formatedFile);
    // }
    setSelectFile(window.URL.createObjectURL(img[0]));
  };

  return (
    <S.WrapperSettingsStyled ref={innerBorderRef}>
      <S.PersonalInfo>
        <S.PhotoInner>
          <S.Photo src={userData.files || profile} alt="profile Photo"></S.Photo>
          <S.ChangePhoto>
            {t('change_photo')}
            <S.ChangePhotoInput type="file" onChange={onChangePhoto} />
          </S.ChangePhoto>
        </S.PhotoInner>
        <S.TitleInner>
          <S.Title>
            {userData.firstName} {userData.lastName}
          </S.Title>
          <S.SubTitle>{userData.email}</S.SubTitle>
        </S.TitleInner>
        <S.PlusClose onClick={setOpenModal} className="icon-add-plus"></S.PlusClose>
      </S.PersonalInfo>
      <S.AddedFavoriteMovies>
        <S.AddedMoviesTitle>{t('favorite_movies')}:</S.AddedMoviesTitle>
        <S.AddedMoviesBtn onClick={() => history.push(ERoutes.favorite)}>
          {t('show')}
        </S.AddedMoviesBtn>
      </S.AddedFavoriteMovies>
      <S.AddedWatchLaterMovies>
        <S.AddedMoviesTitle>{t('watch_movies')}:</S.AddedMoviesTitle>
        <S.AddedMoviesBtn onClick={() => history.push(ERoutes.watch_later)}>
          {t('show')}
        </S.AddedMoviesBtn>
      </S.AddedWatchLaterMovies>
      <S.LogOut onClick={logoutHandler}>
        <S.LogOutIcon className="icon-Log-Out"></S.LogOutIcon>
        <S.LogOutTitle onClick={setOpenModal}>{t('log_out')}</S.LogOutTitle>
      </S.LogOut>
    </S.WrapperSettingsStyled>
  );
};
