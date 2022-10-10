import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from '@material-ui/core';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import React, { PropsWithChildren } from 'react';
import Dropzone from 'react-dropzone';
import { Control, Controller } from 'react-hook-form';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme) => ({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    padding: '10px',
    marginTop: '20px',
  },
  icon: {
    marginTop: '16px',
    color: '#888',
    fontSize: '42px',
  },
}));

interface IFileInputProps<T> {
  control: Control<T>;
  name: string;
}

export const FileInput: React.FC<IFileInputProps<any>> = ({
  control,
  name,
}: PropsWithChildren<IFileInputProps<Record<string, any>>>): React.ReactElement => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value, name } }) => {
        console.log('value', value);
        return (
          <>
            <Dropzone onDrop={onChange}>
              {({ getRootProps, getInputProps }) => (
                <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                  <CloudUpload className={styles.icon} />
                  <input {...getInputProps()} name={name} onBlur={onBlur} />
                  <p>Drag &apos;n&apos; drop files here, or click to select files</p>
                </Paper>
              )}
            </Dropzone>
            <List>
              {value.map((f: any, index: number) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        );
      }}
    />
  );
};
