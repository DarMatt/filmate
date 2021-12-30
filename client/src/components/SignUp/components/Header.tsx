import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
    fontSize: '40px',
    color: '#00b2ff',
    textShadow: '1px 1px darkblue',
    fontFamily: 'Montserrat',
  },
}));

export const Header: React.FC = ({ children }) => {
  const styles = useStyles();
  return (
    <Typography className={styles.root} component="h1" variant="h5">
      {children}
    </Typography>
  );
};
