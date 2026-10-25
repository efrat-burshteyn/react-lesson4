import React from "react";
function colorTask(task) {
    return  task.isCompleted ? "green" : "red"
}

export default function TodoItem({ task }) {
  return (
    <div>
      <h3 style={{ color: colorTask(task) }}>{task.title}</h3>
    </div>
  );
}