import { React , useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <AddTodo setTodos ={setTodos} ></AddTodo>

      <TodoList todos={todos} ></TodoList>
      
    </div>
  );
}

export default App;
