import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton(props) {
  const {lable} = props

  return (
        <Button variant="contained" className={"myButton"}>
            {lable}
        </Button>
  );
}
