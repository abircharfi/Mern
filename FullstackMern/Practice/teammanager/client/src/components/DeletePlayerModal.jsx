import React from 'react';
import Modal from 'react-modal';

const DeletePlayerModal = ({ isOpen, onClose, onDelete }) => {
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '300px',
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
      padding: '20px',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Player Modal"
      style={modalStyles}
    >
      <h2 style={{ marginBottom: '20px' }}>Confirm Deletion</h2>
      <p style={{ marginBottom: '30px' }}>Are you sure you want to delete this player?</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            backgroundColor: '#d9534f',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            marginRight: '10px',
            cursor: 'pointer',
            border: 'none',
          }}
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          style={{
            backgroundColor: '#5bc0de',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            border: 'none',
          }}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeletePlayerModal;
