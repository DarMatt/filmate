import React, { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { MainContainer } from './components/MainContainer';
import { useTranslation } from 'react-i18next';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { IStep1 } from '../../interfaces/signUp';
import Modal, { IProps } from '../modal';
import {
  StepWrapperStyle,
  PlusCloseStyle,
  StepsBoxStyle,
  StepStartStyle,
  StepEndStyle,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signup } from '../../redux-slices/auth-slice';
import { getUserDataSelector } from '../../selectors/selectors';
import { ROUTE_STEP_2_PAGE } from '../../CONST/list-local-routes/routes';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

const Step1: React.FC<IProps> = ({ onClick }) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const data = useAppSelector(getUserDataSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['common']);
  const defaultValues = { firstName: data?.firstName, lastName: data?.lastName };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [data, reset]);

  const onSubmit = (values: IStep1) => {
    history.push(ROUTE_STEP_2_PAGE);
    dispatch(signup(values));
    // reset(
    //   {
    //     firstName: '',
    //     lastName: '',
    //   },
    //   { keepDefaultValues: true }
    // );
  };
  console.log('data', data);
  return params.get('step-one') ? (
    <Modal onClick={onClick}>
      <StepWrapperStyle>
        <MainContainer>
          <PlusCloseStyle
            onClick={() => {
              history.push(location.pathname);
            }}
            className="icon-add-plus"
          ></PlusCloseStyle>
          <Typography component="h3" variant="h6">
            {t('become_a_member')}
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('firstName', { required: true })}
              id="firstName"
              type="text"
              label="First Name"
              name="firstName"
              aria-invalid={!!errors?.firstName}
              helperText={errors?.firstName?.message}
            />
            <Input
              {...register('lastName', { required: true })}
              id="lastName"
              type="text"
              label="Last Name"
              name="lastName"
              aria-invalid={!!errors?.lastName}
              helperText={errors?.lastName?.message}
            />
            <StepsBoxStyle>
              <div>
                {'Step '}
                <StepStartStyle>1</StepStartStyle>
                {' / '}
                <StepEndStyle>3</StepEndStyle>
              </div>
              <button type="submit">
                {t('next_step')} <span className="icon-next-right-arrow"></span>
              </button>
            </StepsBoxStyle>
            <PrimaryButton disabled={true}>{t('submit')}</PrimaryButton>
          </Form>
        </MainContainer>
      </StepWrapperStyle>
    </Modal>
  ) : null;
};
export default Step1;
