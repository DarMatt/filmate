import React, { forwardRef } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

export const Input = forwardRef((props: TextFieldProps, ref) => {
  return <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props} />;
});

Input.displayName = 'Input';
