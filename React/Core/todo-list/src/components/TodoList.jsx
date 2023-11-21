import { React , useState } from 'react';

const TodoList = ({todos}) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e, todo) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(todo)) {
        return prevCheckedItems.filter((item) => item !== todo);
      } else {
        return [...prevCheckedItems, todo];
      }
    });
  };

  const handleButtonClick = (todo) => {
   // e.preventDefault();
    console.log(checkedItems.includes(todo))
    if (checkedItems.includes(todo)) {
      
      const checkboxElement = document.getElementById(todo);

      console.log(checkboxElement)
      
      if (checkboxElement) {
        checkboxElement.remove();
        
      }
  }
};

  return (
    <div>
      
      {todos.map((todo, index) => (
    <div key={index} id={todo}>
      <label>
        <input
          type="checkbox"
          checked={checkedItems.includes(todo)}
          onChange={(e) => handleCheckboxChange(e, todo)}
        />
        <span style={{ textDecoration: checkedItems.includes(todo) ? 'line-through' : 'none' }}>
          {todo}
        </span>
      </label>
      <button onClick={() => handleButtonClick(todo)}>Delete</button>
    </div>
  ))}
    
  
    </div>
  
)};

export default TodoList