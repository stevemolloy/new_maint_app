import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TaskDisplay from './TaskDisplay';
import NewTaskForm from './NewTaskForm';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">New Task</Link>
          </li>
          <li>
            <Link to="/tasklist">Task list</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/tasklist/:weeknum" element={<TaskDisplay />} />
          <Route path="/" element={<NewTaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}
