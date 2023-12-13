// FormButton.jsx
import React from 'react';
import Button from '@mui/material/Button';

const FormButton = ({ onClick }) => {
  return (
    <Button variant="outlined" color="error" onClick={onClick}>
      Delete
    </Button>
  );
};

export default FormButton;
