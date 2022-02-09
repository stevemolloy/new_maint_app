import React from 'react';
import { useParams } from "react-router-dom";
import TaskTable from './TaskTable';

function TaskDisplay() {
  const { weeknum } = useParams();
  var tasklist;
  if (weeknum) {
    tasklist = (
      <div>
        <h3>Data for week number #{weeknum}</h3>
        <h2>Linac</h2>
        <TaskTable where='linac' week_number={weeknum}/>
        <h2>SPF</h2>
        <TaskTable where='SPF' week_number={weeknum}/>
        <h2>R11</h2>
        <TaskTable where='R11' week_number={weeknum}/>
        <h2>R12</h2>
        <TaskTable where='R12' week_number={weeknum}/>
        <h2>R31</h2>
        <TaskTable where='R31' week_number={weeknum}/>
        <h2>R32</h2>
        <TaskTable where='R32' week_number={weeknum}/>
        <h2>R33</h2>
        <TaskTable where='R33' week_number={weeknum}/>
      </div>
    );
  }
  else {
    tasklist = (
      <div>
        <h2>Linac</h2>
        <TaskTable where='linac' />
        <h2>SPF</h2>
        <TaskTable where='SPF' />
        <h2>R11</h2>
        <TaskTable where='R11' />
        <h2>R12</h2>
        <TaskTable where='R12' />
        <h2>R31</h2>
        <TaskTable where='R31' />
        <h2>R32</h2>
        <TaskTable where='R32' />
        <h2>R33</h2>
        <TaskTable where='R33' />
      </div>
    );
  }
  return tasklist;
}

export default TaskDisplay;
