import './App.css';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [addToDo, setAddToDo] = useState("");
  const [toDos, setToDos] = useState([]);


  return (

    <div className='container text-bg-warning bg-opacity-25 p-3 mt-5'>
      <ToDoForm addToDo={addToDo} setAddToDo={setAddToDo} toDos={toDos} setToDos={setToDos} />
      <hr />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}


export default App;
