import React from 'react';

function Main(props) {
  const mainStyle = {
    display: 'flex',
    backgroundColor :'red',
    width : '80%',
    height : '400px',
    flexWrap : 'wrap',
    justifyContent: 'space-between',
    
  };

  return (
    <div style={mainStyle}>
      {props.children}
    </div>
  );
}

export default Main;
