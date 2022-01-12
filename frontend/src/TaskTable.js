import React, { useState, useEffect } from 'react';
var _ = require('lodash');

const TaskTable = () => {
  const [taskData, setTaskData] = useState([]);

  const URL = "http://0.0.0.0:9000/MaintenanceTasks";
  const yes = "\u2714";
  const no = "\u274C";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
          if (!_.isEqual(taskData, json)) {
            setTaskData(json);
          }
        })
  });

  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Week</th>
          <th>Reporter</th>
          <th>Location</th>
          <th>Start</th>
          <th>End</th>
          <th>Approved?</th>
          <th>Comment</th>
          <th>Done</th>
        </tr>
        {taskData.map((item, i) => {
          return (
            <tr key={item.id}>
              <td>{i}</td>
              <td>{item.week_number}</td>
              <td>{item.reporter}</td>
              <td>{item.where}</td>
              <td>{item.starttime}</td>
              <td>{item.endtime}</td>
              <td>{item.approved ? yes : no}</td>
              <td>{item.task}</td>
              <td>{item.done ? yes : no}</td>
            </tr>
            )
          })}
      </table>
    </div>
  );
}

export default TaskTable;
