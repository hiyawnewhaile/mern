import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [allToDos, setAllToDos] = useState([]);

  const addToDo = task => {
    setAllToDos([...allToDos, task]);
  }

  const handleStatus = (index) => {
    const updatedToDos = allToDos.map((todo, i) => {
      if(index === i){
        todo.Status = !todo.Status;
        // how to do with spread??
      }
      return todo;
    });

    setAllToDos([...updatedToDos])

  }

  const handleDelete = (index) => {
    const filteredToDos = allToDos.filter((todo, i) => {
      return i !== index
    });

    setAllToDos([...filteredToDos])

  }
  return (
    <div className="App">
      <Form newToDo = {addToDo}/>
      <List allTasks = {allToDos} delete = {handleDelete} status = {handleStatus}/>
    </div>
  );
}

export default App;
