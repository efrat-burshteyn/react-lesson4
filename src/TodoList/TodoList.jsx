import React from 'react'
import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem.jsx'
import TodoForm from '../TodoForm/TodoForm.jsx';
export default function TodoList() {
    const [tasks, setTasks] = useState([
        {code:1, title: "task1", isCompleted: false},
        {code:2, title: "task2", isCompleted: true},
        {code:3, title: "task3", isCompleted: false}
    ]);
    function addTask(title) {
      const newTaskObj = {
        code: Date.now(),
        title: title,
        isCompleted: false
      };
      setTasks([...tasks, newTaskObj]);
    }
  return (
    <>
      <TodoForm onAddTask={addTask} />
      {tasks.map((t) => (
        <TodoItem key={t.code} task={t} />
      // {tasks.map(t => ( <div key={t.code}>{t.title}</div>
      ))}
    </>
  )
}
 
