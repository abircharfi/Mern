import React from 'react'

const Box = (props) => {

const { boxArray } = props;   


  return (
    <div>
      <div class="flex-container">
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {boxArray.map((box, index) => (
                        <div
                            key={index}
                            style={{
                                width: box.width + 'px',
                                height: box.height + 'px',
                                backgroundColor: box.color,
                                marginLeft: '10px',
                                marginBottom: '10px',
                            }}
                        ></div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default Box;