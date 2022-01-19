import React, { useState, useEffect } from 'react';
var _ = require('lodash');

const TaskTable = (props) => {
  const [taskData, setTaskData] = useState([]);

  const URL = "http://0.0.0.0:9000/MaintenanceTasks";
  const yes = "\u2714";
  const no = "\u274C";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
          var filtered_array = json.filter( el => {
            for (const [key, value] of Object.entries(props)) {
              if (key in el && el[key].toString() !== value) return false;
            }
            return true;
          });
          if (!_.isEqual(taskData, filtered_array)) {
            setTaskData(filtered_array);
          }
        });
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
              <td>{i+1}</td>
              <td>{item.week_number}</td>
              <td>{item.reporter}</td>
              <td>{item.where}</td>
              <td>{item.starttime}</td>
              <td>{item.endtime}</td>
              <td>{item.approved ? yes : no}</td>
              <td>{item.task}</td>
              <td>{item.done ? yes : no}</td>
            </tr>
            );
          })}
      </table>
    </div>
  );
};

export default TaskTable;
