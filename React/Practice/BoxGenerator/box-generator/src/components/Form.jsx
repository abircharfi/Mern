import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = (props) => {

    const {boxArray, setBoxArray} = props;

    const [colorInput, setColorInput] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState(''); 

    const addnew = (e) => {

        e.preventDefault(); 
        setBoxArray( [ ...boxArray, { color: colorInput, width: width, height: height }]);
        setColorInput('');
        setWidth('');
        setHeight('');

        

    }

    return (
        <div>
            <h1>Write the color of box !</h1>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Color</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" value={colorInput} onChange={(e) => setColorInput(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Width</span>
                </div>

                <input type="number" class="form-control" aria-label="Default" value={width} onChange={(e) => setWidth(e.target.value)} aria-describedby="inputGroup-sizing-default" />
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Height</span>
                </div>
                <input type="number" class="form-control" aria-label="Default" value={height} onChange={(e) => setHeight(e.target.value)} aria-describedby="inputGroup-sizing-default" />
            </div>
            <button className="btn btn-primary" onClick={addnew}> Add </button>
            
        </div>
    )
}

export default Form;