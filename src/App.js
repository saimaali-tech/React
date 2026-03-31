
import './App.css';
import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
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
          <li key={index}>{t}</li>
        ))}
      </ul>
      <ul>
  {tasks.map((t, index) => (
    <li key={index}>{t}</li>
  ))}
</ul>

    </div>
  );
}

export default App;
