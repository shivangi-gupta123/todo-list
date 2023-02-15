import './App.css';
import React, { useState } from 'react';
import Task from './components/Task';
import AddIcon from '@mui/icons-material/Add';


function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  //adding Task
  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: `${task}-${Date.now()}` }]);
      setTask('');
    }

    if (editId) {
      const editTask = taskList.find((i) => i.index === editId);
      const updatedTasks = taskList.map((t) =>
        t.index === editTask.index ? t = { index: t.index, task } : { index: t.index, task: t.task }
      )
      setTaskList(updatedTasks);
      setEditId(0);
      return;
    }
  }

  // deleting Todo .
  const deleteTodo = (index) => {
    var newList = taskList;
    newList.splice(index, 1);
    setTaskList([...newList]);
  }

  // Editing Task
  const handleEdit = (index) => {
    const editTask = taskList.find((i) => i.index === index);
    setTask(editTask.task);
    setEditId(index);
  }

  return (
    <div className="App">
      <div className='main'>
        <h1 className='title'> Todo List </h1>
        <div className='parent'>
          <input type='text' placeholder="Add a new todo" value={task} onChange={(e) => { setTask(e.target.value) }}></input>
          <button onClick={AddTask} className="btn"><AddIcon /></button>
        </div>

        {taskList.map((task) => {
          return <Task task={task.task} deleteTodo={deleteTodo} index={task.index} handleEdit={handleEdit} />
        })}
      </div>

    </div>
  );
}

export default App;