import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  WrapperSignInStyled,
  InnerSignInStyled,
  TitleStyled,
  EmailInputStyled,
  TitleBtnStyled,
  SubmitBtnStyled,
  SubTitleStyled,
  LinkClickStyled,
  CloseBtnStyled,
  InputValidationStyledStyled,
} from './styles';
import Swal from 'sweetalert2';
import { useHistory, useLocation } from 'react-router';
import Modal, { IProps } from '../modal';
import { authAsyncActions } from '../../redux-slices/auth-slice';
import { useAppDispatch } from '../../hooks/redux';
import { HTTP_FULFILLED_STATUS, HTTP_REJECTED_STATUS } from '../../CONST/http-request-status';
import { ROUTE_LOGIN_PAGE, ROUTE_STEP_1_PAGE } from '../../CONST/list-local-routes/routes';
import { useTranslation } from 'react-i18next';

const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const SignIn: React.FC<IProps> = ({ onClick }) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const match = useLocation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['common']);
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email should have correct format').required('Required'),
      password: Yup.string()
        .min(8, 'Minimum characters should be 8')
        .matches(passwordRegExp, 'Password must have one upper, lower case, number, special symbol')
        .required('Required'),
    }),
    onSubmit: async () => {
      const data = await dispatch(authAsyncActions.loginAction({ ...values }));
      const {
        meta: { requestStatus },
      } = data;
      if (requestStatus === HTTP_FULFILLED_STATUS) {
        await dispatch(authAsyncActions.getMyProfileAction(data.payload.userId));
        history.push(match.pathname);
        Swal.fire('Great job!', 'You are logged in');
      } else if (requestStatus === HTTP_REJECTED_STATUS) {
        history.push(ROUTE_LOGIN_PAGE);
        Swal.fire('Incorrect data, please check your information');
      }
    },
  });

  return params.get('sign-in') ? (
    <Modal onClick={onClick}>
      <WrapperSignInStyled />
      <InnerSignInStyled>
        <TitleStyled>{t('log_in')}</TitleStyled>
        <CloseBtnStyled
          onClick={() => {
            history.push(location.pathname);
          }}
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <span className="icon-email_icon"></span>
            <EmailInputStyled
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              name="email"
              placeholder="Email"
            />
            {touched.email && errors.email ? (
              <InputValidationStyledStyled format={'email'}>
                {errors.email}
              </InputValidationStyledStyled>
            ) : null}
          </label>
          <label htmlFor="">
            <span style={{ top: '20px', fontSize: '20px' }} className="icon-lock_icon"></span>
            <EmailInputStyled
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <span
              style={{ fontSize: '20px', left: 'auto', right: '20px', cursor: 'pointer' }}
              className="icon-view_icon"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
            {touched.password && errors.password ? (
              <InputValidationStyledStyled>{errors.password}</InputValidationStyledStyled>
            ) : null}
          </label>
          <SubmitBtnStyled type="submit">{t('submit')}</SubmitBtnStyled>
        </form>
        <SubTitleStyled>Don&apos;t have an account?</SubTitleStyled>
        <TitleBtnStyled>{t('no_account')}</TitleBtnStyled>
        <LinkClickStyled to={{ pathname: match.pathname, search: ROUTE_STEP_1_PAGE }}>
          {t('sign_up')}
        </LinkClickStyled>
      </InnerSignInStyled>
    </Modal>
  ) : null;
};
export default SignIn;
