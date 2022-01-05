import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '10%',
    left: 'calc(50% - 220px)',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '90px 64px',
    background: '#FFFFFF',
    backdropFilter: 'blur(24px)',
    borderRadius: '20px',
    width: '486px',
    ['@media (max-width: 500px)']: {
      left: 'calc(50% - 180px)',
      width: '365px',
      padding: '40px 34px',
    },
  },
}));

interface IProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: any;
}

export const MainContainer: React.FC<IProps> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container className={styles.root} container="main" maxWidth="xs" {...props}>
      {children}
    </Container>
  );
};
