import React from 'react';

const Button = ({ onClick, type }) => {
  const buttonStyles = {
    background: 'linear-gradient(to right, #ffffff, #777777)',
    color: '#ffffff',
    boxShadow: '0px 0px 10px 2px rgba(255, 255, 255, 0.5)',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
  };

  const getButtonLabel = () => {
    switch (type) {
      case 'edit':
        return 'Edit';
      case 'delete':
        return 'Delete';
      default:
        return '';
    }
  };

  return (
    <button style={{ ...buttonStyles, background:  'linear-gradient(to bottom, #ffffff, #595656 ,#595656)' }} onClick={onClick}>
      {getButtonLabel()}
    </button>
  );
};

export default Button;
