import './App.css';
import TaskTable from './TaskTable'

function App() {
  return (
    <div className="App">
      <h2>Linac</h2>
      <TaskTable where='linac'/>
      <h2>SPF</h2>
      <TaskTable where='SPF'/>
      <h2>R11</h2>
      <TaskTable where='R11'/>
      <h2>R12</h2>
      <TaskTable where='R12'/>
      <h2>R31</h2>
      <TaskTable where='R31'/>
      <h2>R32</h2>
      <TaskTable where='R32'/>
      <h2>R33</h2>
      <TaskTable where='R33'/>
    </div>
  );
}

export default App;
