import React, { ReactEventHandler, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCrop, { Crop } from 'react-image-crop';
import * as S from './style';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from '../../utils/helpers';

type getCropImgType = (image: HTMLImageElement, crop: any) => string;

type IProps = {
  setBase64Image: (getCropImgType) => void;
  file: string;
  upDateInfoUser?: (any) => void;
};

const ReactCropComponent: React.FC<IProps> = ({ setBase64Image, file, upDateInfoUser }) => {
  const { t } = useTranslation(['common']);
  const [image, setImage] = useState<HTMLImageElement>();
  const [crop, setCrop] = useState<Crop>();

  return (
    <S.OriginalPicture>
      <ReactCrop crop={crop} onChange={setCrop} aspect={1 / 1}>
        <img src={file} onLoadCapture={(e) => setImage(e.currentTarget)} />
      </ReactCrop>
      <button
        type="button"
        onClick={() => {
          setBase64Image(image && getCroppedImg(image, crop));
          // upDateInfoUser(image && getCroppedImg(image, crop));
        }}
      >
        {t('apply')}
      </button>
      <div>{t('select_area_with_mouse')}</div>
    </S.OriginalPicture>
  );
};

export default ReactCropComponent;
