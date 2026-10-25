import React from "react";
export default function TodoItem({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
    </div>
  );
}