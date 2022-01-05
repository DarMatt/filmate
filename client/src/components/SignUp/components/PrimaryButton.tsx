import React, { ReactNode } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    background: '#2E2E2E',
    borderRadius: '10px',
    height: '60px',
    fontSize: '18px',
    lineHeight: '22px',
    textTransform: 'none',
    letterSpacing: '0.04em',
    pointer: 'not-allowed',
  },
}));

interface IProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<IProps> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button className={styles.root} type="submit" fullWidth variant="contained" {...props}>
      {children}
    </Button>
  );
};
