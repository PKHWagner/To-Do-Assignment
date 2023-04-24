import React from 'react'

const ToDoList = ({ toDos, setToDos }) => {

  const deleteHandler = (deletedItem) => {
    const updatedToDos = toDos.filter((todo, i) => (
      i !== deletedItem
    ));
    setToDos(updatedToDos);
  }

  const checkboxHandler = (checkedItem) => {
    const checkedToDos = toDos.map((todo, i) => {
      if (checkedItem === i) {
        const checkedToDos = { ...todo, completed: !todo.completed };
        return checkedToDos;
      }
      return todo;
    });
    setToDos(checkedToDos);
  }

  return (
    <div>
      <h1>Your To-Do List:</h1>

      {
        toDos.map((todo, i) => {
          const listClass = ["none"];
          if (todo.completed) {
            listClass.push("strikethrough")
          }
          return (
            <div key={i}>
              <ul>
                <div className='d-flex justify-content-center align-items-center'>
                  <input checked={todo.completed} type="checkbox" onChange={(e) => checkboxHandler(i)} />
                  <li className={listClass.join(" ")}>{todo.text}</li>
                  <button className='btn btn-outline-danger' onClick={(e) => deleteHandler(i)}>Delete</button>
                </div>
              </ul>
            </div >
          )
        })
      }
    </div >
  )
}

export default ToDoList