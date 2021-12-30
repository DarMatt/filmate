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
import { useData } from '../../context/DataContext';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import { MainContainer } from './components/MainContainer';
import { Link } from 'react-router-dom';
import { InsertDriveFile } from '@material-ui/icons';
import { PrimaryButton } from './components/PrimaryButton';
import { Header } from './components/Header';
import { useMessage } from '../../hooks/message.hook';
import { apiUrl } from '../../api/URLs';
import { useAuth } from '../../context/AuthContext';
import { post } from '../../services/fetch';
import Modal, { IProps } from '../modal';
import { LinkStyledStyled, StepWrapperStyle } from './styles';
import { getUserDataSelector } from '../../selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authAsyncActions } from '../../redux-slices/auth-slice';
import {
  HTTP_FULFILLED_STATUS,
  HTTP_REJECTED_STATUS,
  HTTP_PENDING_STATUS,
} from '../../CONST/http-request-status';
import { useForm } from 'react-hook-form';
import { ROUTE_LOGIN_PAGE, ROUTE_STEP_1_PAGE } from '../../CONST/list-local-routes/routes';

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
  const auth = useAuth();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files, email, password } = data;
  const dispatch = useAppDispatch();
  console.log('registerData', data);
  const onSubmit = async () => {
    // const info = await post(`${apiUrl}register`, { ...data });
    // const info2 = await post(`${apiUrl}login`, { email, password });
    // auth.login(info2.token, info2.userId);
    // message(info.message);
    const info = await dispatch(authAsyncActions.signUpAction({ ...data }));
    console.log(info);
    const {
      meta: { requestStatus },
    } = info;
    // switch (requestStatus) {
    //   case HTTP_PENDING_STATUS:
    //   case HTTP_FULFILLED_STATUS:
    //     message(info.payload.message);
    //     Swal.fire('Great job!', 'You become a member of FilmMatt');
    //     history.push('/');
    //     break;
    // }
    if (requestStatus === HTTP_FULFILLED_STATUS) {
      message(info.payload.message);
      Swal.fire('Great job!', 'You become a member of FilmMatt');
      history.push('/');
      await dispatch(authAsyncActions.loginAction({ email, password }));
    } else if (requestStatus === HTTP_REJECTED_STATUS) {
      Swal.fire('This user is already registered. Please go to Sign In');
      history.push(ROUTE_LOGIN_PAGE);
    }
  };

  return params.get('results') ? (
    <Modal onClick={onClick}>
      <StepWrapperStyle>
        <MainContainer maxWidth="md" style={{ width: '620px' }}>
          <Typography component="h2" variant="h5" style={{ paddingBottom: '20px' }}>
            Please check your information
          </Typography>
          <Typography component="h3" variant="h6" style={{ paddingBottom: '30px' }}>
            If you made a mistake, you can go back and correct it
          </Typography>
          <TableContainer className={styles.root} component={Paper}>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell align="right">Value</TableCell>
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
                Files 🗃
              </Typography>
              <List>
                {files.map((f: any, index: number) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
          <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
          <LinkStyledStyled to={{ pathname: match.pathname, search: ROUTE_STEP_1_PAGE }}>
            Start over
          </LinkStyledStyled>
        </MainContainer>
      </StepWrapperStyle>
    </Modal>
  ) : null;
};
export default Result;
