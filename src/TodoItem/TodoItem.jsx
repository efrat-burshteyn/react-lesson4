import React from "react";
function colorTask(task) {
    return  task.isCompleted ? "green" : "red"
}
function buttonTask(task, onComplete) {
    if(task.isCompleted) return;
    return <button onClick={() => onComplete(task.code)}>המשימה בוצעה</button>;
}
export default function TodoItem({ task,onComplete }) {
  return (
    <div>
      <h3 style={{ color: colorTask(task) }}>{task.title}</h3>
      {buttonTask(task, onComplete)}
    </div>
  );
}