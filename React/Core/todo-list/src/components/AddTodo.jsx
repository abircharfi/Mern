import React from 'react'

const AddTodo = ({setTodos}) => {



  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    setTodos((prev) => [...prev, todo]);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' id="todo"></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo