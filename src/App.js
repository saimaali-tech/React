import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    const [task, setTask] = useState("");
  return (
    <div>
      <h1>DevOps Daily Tracker 🚀</h1>
      <input placeholder="Enter task..." />
      <button>Add</button>
    </div>
  );
}

export default App;
