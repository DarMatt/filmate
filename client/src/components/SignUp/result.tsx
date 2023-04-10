import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { InsertDriveFile } from '@material-ui/icons';
import { PrimaryButton } from './components/PrimaryButton';
import { useMessage } from '../../hooks/message.hook';
import Modal, { IProps } from '../modal';
import { LinkStyledStyled, ResultMainContainer, StepWrapperStyle } from './styles';
import { getUserDataSelector } from '../../selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authAsyncActions, updateUserInfo, login } from '../../redux-slices/auth-slice';
import { useTranslation } from 'react-i18next';
import { HTTP_FULFILLED_STATUS, HTTP_REJECTED_STATUS } from '../../CONST/http-request-status';
import { ROUTE_LOGIN_PAGE, ROUTE_STEP_1_PAGE } from '../../CONST/list-local-routes/routes';
import { profile } from '../../assets/images/files';

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

const Result: React.FC<IProps> = ({ onClick }) => {
  const message = useMessage();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const match = useLocation();
  const styles = useStyles();
  const data = useAppSelector(getUserDataSelector);
  const { t } = useTranslation(['common']);
  // const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const entries = Object.entries(data)
    .filter((entry) => entry[0] !== 'password')
    .filter((entry) => entry[0] !== 'files')
    .filter((entry) => entry[0] !== 'confirmPassword');
  const { files, email, password } = data;
  const dispatch = useAppDispatch();
  const onSubmit = async () => {
    const fileInstance = files || profile;
    const info = await dispatch(authAsyncActions.signUpAction({ ...data, files: fileInstance }));

    const {
      meta: { requestStatus },
    } = info;
    if (requestStatus === HTTP_FULFILLED_STATUS) {
      const { user, accessToken } = info.payload;
      message(info.payload.message);
      Swal.fire('Great job!', 'You become a member of FilmMatt');
      history.push('/');
      dispatch(updateUserInfo(user));
      dispatch(login({ userId: user._id, token: accessToken }));
      // await dispatch(authAsyncActions.loginAction({ email, password }));
    } else if (requestStatus === HTTP_REJECTED_STATUS) {
      Swal.fire('This user is already registered. Please go to Sign In');
      history.push(ROUTE_LOGIN_PAGE);
    }
  };

  return params.get('results') ? (
    <Modal onClick={onClick}>
      <StepWrapperStyle>
        <ResultMainContainer>
          <Typography component="h2" variant="h5" style={{ paddingBottom: '20px' }}>
            {t('check_info')}
          </Typography>
          <Typography component="h3" variant="h6" style={{ paddingBottom: '30px' }}>
            {t('if_make_mistake')}
          </Typography>
          <TableContainer className={styles.root} component={Paper}>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>{t('field')}</TableCell>
                  <TableCell align="right">{t('value')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry[0]}>
                    <TableCell>{entry[0]}</TableCell>
                    <TableCell align="right">{entry[1].toString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {files && (
            <>
              <Typography component="h2" variant="h5">
                {t('files')} 🗃
              </Typography>
              <List>
                <img
                  src={files}
                  alt="avatar"
                  style={{ maxWidth: '200px', height: 'fitContent;' }}
                />
                {/* {files.map((f: any, index: number) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size} />
                  </ListItem>
                ))} */}
              </List>
            </>
          )}
          <PrimaryButton onClick={onSubmit}>{t('submit')}</PrimaryButton>
          <LinkStyledStyled to={{ pathname: match.pathname, search: ROUTE_STEP_1_PAGE }}>
            {t('start_over')}
          </LinkStyledStyled>
        </ResultMainContainer>
      </StepWrapperStyle>
    </Modal>
  ) : null;
};
export default Result;
