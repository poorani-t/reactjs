import React, { useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [input, setInput] = useState(""); // Store input value

  // Function to add a task
  const addTask = () => {
    if (input.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, input]);
    setInput(""); // Clear input field
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;