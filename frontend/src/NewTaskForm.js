import React, { useState } from 'react';

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState({
    datetime: '',
    reporter: '',
    fixer: '',
    where: '',
    task: '',
    starttime: '',
    endtime: '',
    approved: '',
    week_number: '',
    year: '',
    archived: '',
    done: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>New Task Form Placeholder</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Your Name:
          <input type="text"
            value={formData.reporter}
            onChange={(e) => setFormData({...formData, reporter: e.target.value})}
          />
        </label>
        </div>
        <div>
        <label>
          Responsible:
          <input type="text"
            value={formData.fixer}
            onChange={(e) => setFormData({...formData, fixer: e.target.value})}
          />
        </label>
        </div>
        <div>
        <label>
          Week number:
          <input type="text"
            value={formData.week_number}
            onChange={(e) => setFormData({...formData, week_number: e.target.value})}
          />
        </label>
        </div>
        <div>
        <label>
          Start time:
          <input type="text"
            value={formData.starttime}
            onChange={(e) => setFormData({...formData, starttime: e.target.value})}
          />
        </label>
        </div>
        <div>
        <label>
          End time:
          <input type="text"
            value={formData.endtime}
            onChange={(e) => setFormData({...formData, endtime: e.target.value})}
          />
        </label>
        </div>
        <div>
        <label>
          Location(s):
          <br/>
          Linac:<input type="checkbox"
            value='Linac'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
          R11:<input type="checkbox"
            value='R11'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
          R12:<input type="checkbox"
            value='R12'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
          R31:<input type="checkbox"
            value='R31'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
          R32-35:<input type="checkbox"
            value='R32-35'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
          SPF:<input type="checkbox"
            value='SPF'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
          Other:<input type="checkbox"
            value='Other'
            name='location'
            onChange={(e) => console.log(e.target)}
          />
          <br/>
        </label>
        </div>
        <div>
        <label>
          Details:
          <textarea type="text"
            value={formData.task}
            onChange={(e) => setFormData({...formData, task: e.target.value})}
          />
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewTaskForm;
