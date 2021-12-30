import React from 'react';
import { useForm } from 'react-hook-form';
import { MainContainer } from './components/MainContainer';
import Typography from '@material-ui/core/Typography';
import { FileInput } from './components/FileInput';
import { Form } from './components/Form';
import { PrimaryButton } from './components/PrimaryButton';
import { useHistory } from 'react-router';
import { useData } from '../../context/DataContext';
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
import { signup } from '../../redux-slices/auth-slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUserDataSelector } from '../../selectors/selectors';
import { ROUTE_RESULTS_PAGE } from '../../CONST/list-local-routes/routes';

const Step3: React.FC<IProps> = ({ onClick }) => {
  const data = useAppSelector(getUserDataSelector);
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (values: IStep3) => {
    history.push(ROUTE_RESULTS_PAGE);
    console.log('filesValues', values);
    // reset();
    // dispatch(signup(values));
    // setValues(values);
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
            Upload an avatar for your profile
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control} />
            <StepsBoxStyle>
              <div>
                {'Step '}
                <StepStartStyle>3</StepStartStyle>
                {' / '}
                <StepEndStyle>4</StepEndStyle>
              </div>
              <button type="submit">
                Next step <span className="icon-next-right-arrow"></span>
              </button>
            </StepsBoxStyle>
            <PrimaryButton disabled={true}>Submit</PrimaryButton>
          </Form>
        </MainContainer>
      </StepWrapperStyle>
    </Modal>
  ) : null;
};
export default Step3;
