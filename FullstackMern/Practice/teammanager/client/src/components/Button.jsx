import React from 'react';

const Button = ({ onClick }) => {
  const buttonStyles = {
    background :'red',
    color: '#ffffff',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.5)',
    border: '3px solid black',
    padding: '5px 25px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  

  return (
    <button style={{ ...buttonStyles }} onClick={onClick}>
      DELETE
    </button>
  );
};

export default Button;
