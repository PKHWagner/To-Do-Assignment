import React from 'react'

const ToDoForm = ({ addToDo, setAddToDo, toDos, setToDos }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    if (addToDo.length === 0) {
      return;
    }
    const toDoObj = {
      text: addToDo,
      completed: false
    }
    setToDos([...toDos, toDoObj]);
    setAddToDo("");
    // console.log("Index--->", addToDo);
  }

  const changeHandler = (e) => {
    setAddToDo(e.target.value);
  }

  return (
    <div className='text-center'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="addToDo">Add to To-Do List:</label>
          <input type="text" name="addToDo" id="addToDo" value={addToDo} className='mx-5' onChange={changeHandler} />
          <button className='btn btn-outline-success'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default ToDoForm