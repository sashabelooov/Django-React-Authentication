import * as React from 'react';
import '../../App.css'
import TextField from '@mui/material/TextField';

export default function MyTextField(props) {
  const {lable} = props
  return (
    <TextField 
        id="outlined-basic" 
        label={lable}
        variant="outlined"
        className={'myForm'}
    />
  );
}
