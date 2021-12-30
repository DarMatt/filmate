import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '10%',
    left: 'calc(50% - 243px)',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '90px 64px',
    background: '#FFFFFF',
    backdropFilter: 'blur(24px)',
    borderRadius: '20px',
    width: '486px',
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
