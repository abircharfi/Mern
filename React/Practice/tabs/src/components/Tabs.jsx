import {React , useState }from 'react'
import './Tab.css'

function Tabs(props) {
    const [tableObject, setTableObject] = useState({
        label: props.label,
        content: props.content,
      });
      const updateTableObject = (e,number) => {
        e.preventDefault();
        setTableObject({ 
            label :number,         
          content: `Tab ${number} content is showing here`,         
        });
        console.log(number)
      };
  return (
    <div>
        <button onClick={(e)=> {updateTableObject(e,1)}}>Tab 1</button>
        <button onClick={(e)=> {updateTableObject(e,2)}}>Tab 2</button>
        <button onClick={(e)=> {updateTableObject(e,3)}}>Tab 3</button>
       <table> 
        {tableObject.content}
        </table> 
    </div>
  )
}

export default Tabs