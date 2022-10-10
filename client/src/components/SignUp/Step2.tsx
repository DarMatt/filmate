import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { MainContainer } from './components/MainContainer';
import Typography from '@material-ui/core/Typography';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from './components/PrimaryButton';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { IDefaultValues, IStep2 } from '../../interfaces/signUp';
import Modal, { IProps } from '../modal';
import {
  StepWrapperStyle,
  PlusCloseStyle,
  StepsBoxStyle,
  StepStartStyle,
  StepEndStyle,
  StepTwoLabelStyle,
  StepIcoonStyle,
  StepIcoonClokStyle,
  StepIcoonPasswordStyle,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signup } from '../../redux-slices/auth-slice';
import { getUserDataSelector } from '../../selectors/selectors';
import { ROUTE_RESULTS_PAGE, ROUTE_STEP_3_PAGE } from '../../CONST/list-local-routes/routes';
const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(passwordRegExp, 'Password must have one upper, lower case, number, special symbol')
    .required('Please Enter your password'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const normalizePhoneNumber = (values: string) => {
  const phoneNumber = parsePhoneNumberFromString(values);
  if (!phoneNumber) {
    return values;
  }
  return phoneNumber.formatInternational();
};

const Step2: React.FC<IProps> = ({ onClick }) => {
  const params = new URLSearchParams(location.search);
  const data = useAppSelector(getUserDataSelector);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['common']);
  const [showPassword, setShowPassword] = useState(false);
  const defaultValues = {
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    hasPhone: data.hasPhone,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IDefaultValues>({
    defaultValues: defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [data, reset]);

  const hasPhone = watch('hasPhone');

  const onSubmit = (values: IStep2) => {
    console.log('values', values);
    // history.push(ROUTE_RESULTS_PAGE);
    history.push(ROUTE_STEP_3_PAGE);
    reset(
      {
        email: '',
        password: '',
        confirmPassword: '',
        hasPhone: false,
      },
      { keepDefaultValues: true }
    );
    dispatch(signup(values));
    // setValues(values);
  };

  return params.get('step-two') ? (
    <Modal onClick={onClick}>
      <StepWrapperStyle>
        <MainContainer>
          <PlusCloseStyle
            onClick={() => {
              history.push(location.pathname);
            }}
            className="icon-add-plus"
          ></PlusCloseStyle>
          <Typography component="h2" variant="h5">
            {t('create_password')}
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <StepTwoLabelStyle htmlFor="">
              <StepIcoonStyle className="icon-email_icon" />
              <Input
                {...register('email', { required: true })}
                id="email"
                type="email"
                label="Email"
                name="email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
            </StepTwoLabelStyle>
            <StepTwoLabelStyle htmlFor="">
              <StepIcoonClokStyle
                style={{ fontSize: '20px' }}
                className="icon-lock_icon"
                onClick={() => setShowPassword(!showPassword)}
              ></StepIcoonClokStyle>
              <Input
                {...register('password', { required: true })}
                id="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                required
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
            </StepTwoLabelStyle>
            <StepTwoLabelStyle htmlFor="">
              <StepIcoonPasswordStyle
                style={{ fontSize: '20px' }}
                className="icon-lock_icon"
                onClick={() => setShowPassword(!showPassword)}
              ></StepIcoonPasswordStyle>
              <Input
                {...register('confirmPassword', { required: true })}
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                label="Confirm Password"
                name="confirmPassword"
                required
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
              />
            </StepTwoLabelStyle>

            <FormControlLabel
              control={
                <Checkbox
                  // defaultValue={data.hasPhone}
                  defaultChecked={data.hasPhone}
                  {...register('hasPhone')}
                  color="primary"
                />
              }
              label="Do you have a phone"
            />

            {hasPhone && (
              <Input
                {...register('phoneNumber')}
                id="phoneNumber"
                type="tel"
                label="Phone number"
                name="phoneNumber"
                defaultValue={data.phoneNumber}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = normalizePhoneNumber(event.target.value);
                }}
              />
            )}
            <StepsBoxStyle>
              <div>
                {'Step '}
                <StepStartStyle>2</StepStartStyle>
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
export default Step2;
