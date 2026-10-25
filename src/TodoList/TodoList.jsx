import React from 'react'
import TodoItem from '../TodoItem/TodoItem.jsx'

export default function TodoList() {
    const tasks = [{code:1, title: "task1", isCompleted: false},
         {code:2, title: "task2", isCompleted: true},
          {code:3, title: "task3", isCompleted: false}];
  return (
    <>
      {tasks.map((t) => (
        <TodoItem key={t.code} task={t} />
      // {tasks.map(t => ( <div key={t.code}>{t.title}</div>
      ))}
    </>
  )
}
 
