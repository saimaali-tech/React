import './App.css';
import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>DevOps Daily Tracker 🚀</h1>

      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..." 
      />

      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}> ❌ </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;