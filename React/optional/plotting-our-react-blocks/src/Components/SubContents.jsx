import React from 'react';

function SubContents() {
  const subContentsStyle = {
    background: 'yellow',
    width : '100px',
    height : '200px',
    padding: '1rem',
    marginTop :'10px',
  };

  return (
    <div style={subContentsStyle}>
      {/* Your subcontents content goes here */}
    </div>
  );
}

export default SubContents;
