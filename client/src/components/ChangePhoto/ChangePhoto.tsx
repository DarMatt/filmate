import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import ReactCropComponent from '../ReactCropComponent/ReactCropComponent';
import { ImgWrapper } from '../SignUp/styles';

export const ChanhePhoto = ({ file, onHandleChange }) => {
  const [base64Image, setBase64Image] = useState(null);
  const [visibleButtons, setVisibleButtons] = useState(true);

  const savePhoto = () => {
    setVisibleButtons(false);
    onHandleChange(base64Image);
  };

  return (
    <>
      {!base64Image && <ReactCropComponent setBase64Image={setBase64Image} file={file} />}
      {base64Image && (
        <ImgWrapper>
          <img src={base64Image} alt="cut image" />
          {visibleButtons && (
            <div className="btn_crop_inner">
              <Button
                variant="outlined"
                onClick={() => {
                  setBase64Image(null);
                }}
              >
                Edit
              </Button>
              <Button variant="outlined" onClick={savePhoto}>
                Save
              </Button>
            </div>
          )}
        </ImgWrapper>
      )}
    </>
  );
};
