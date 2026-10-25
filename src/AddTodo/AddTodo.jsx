import React from 'react'
import {useState} from 'react'
export default function AddTodo({onAddTask}) {

  const [newTask, setNewTask] = useState('');
function handleSubmit(e) {
    e.preventDefault();
    if(newTask.trim() === '') return;
    onAddTask(newTask);
    setNewTask('');
  }

  return (
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder='add new task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
    <button type="submit">אישור</button>
   </form>
  );
}
