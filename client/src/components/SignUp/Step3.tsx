import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MainContainer } from './components/MainContainer';
import Typography from '@material-ui/core/Typography';
import { FileInput } from './components/FileInput';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { IStep3 } from '../../interfaces/signUp';
import Modal, { IProps } from '../modal';
import {
  PlusCloseStyle,
  StepEndStyle,
  StepsBoxStyle,
  StepStartStyle,
  StepWrapperStyle,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserDataSelector } from '../../selectors/selectors';
import { ROUTE_RESULTS_PAGE } from '../../CONST/list-local-routes/routes';
import { signup } from '../../redux-slices/auth-slice';

const Step3: React.FC<IProps> = ({ onClick }) => {
  const data = useAppSelector(getUserDataSelector);
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  const defaultValues = {
    files: data.files,
  };
  const { control, handleSubmit, reset } = useForm({
    defaultValues: defaultValues,
  });

  // useEffect(() => {
  //   reset(defaultValues);
  // }, [data, reset]);

  const onSubmit = (values: IStep3) => {
    console.log('values', values);
    history.push(ROUTE_RESULTS_PAGE);
    for (let i = 0; i < values.files.length; i++) {
      const reader = new FileReader();
      const file = values.files[i];
      reader.onload = () => {
        dispatch(signup({ files: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }

    // dispatch(signup(values));
  };

  return params.get('step-three') ? (
    <Modal onClick={onClick}>
      <StepWrapperStyle>
        {/* <Header>Upload an avatar for your profile</Header> */}
        <MainContainer style={{ padding: '90px 50px' }}>
          <PlusCloseStyle
            onClick={() => {
              history.push(location.pathname);
            }}
            className="icon-add-plus"
          ></PlusCloseStyle>
          <Typography component="h2" variant="h5">
            {t('upload_avatar')}
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control} />
            <StepsBoxStyle>
              <div>
                {'Step '}
                <StepStartStyle>3</StepStartStyle>
                {' / '}
                <StepEndStyle>3</StepEndStyle>
              </div>
              <button type="submit">
                {t('next_step"')} <span className="icon-next-right-arrow"></span>
              </button>
            </StepsBoxStyle>
            <PrimaryButton disabled={true}>{t('submit')}</PrimaryButton>
          </Form>
        </MainContainer>
      </StepWrapperStyle>
    </Modal>
  ) : null;
};
export default Step3;
