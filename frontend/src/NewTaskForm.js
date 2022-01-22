import React, { useState } from 'react';

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState({
    datetime: '2022-01-22',
    reporter: '',
    fixer: '',
    linac: false,
    R11: false,
    R12: false,
    R31: false,
    R3235: false,
    spf: false,
    other: false,
    task: '',
    starttime: '',
    endtime: '',
    approved: false,
    week_number: '',
    year: '',
    archived: false,
    done: false
  });

  const URL = "http://0.0.0.0:9000/Maintenancetasks";
  const handleSubmit = (event) => {
    fetch(URL, {
      method: 'POST',
	    body: JSON.stringify(formData),
      headers: {'Content-Type': 'application/json'}
    });
    event.preventDefault();
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
            onChange={(e) => {
              const accessAllowed = !formData.linac;
              setFormData({...formData, linac: accessAllowed});
            }}
          />
          <br/>
          R11:<input type="checkbox"
            value='R11'
            name='location'
            onChange={(e) => {
              const accessAllowed = !formData.r11;
              setFormData({...formData, r11: accessAllowed});
            }}
          />
          <br/>
          R12:<input type="checkbox"
            value='R12'
            name='location'
            onChange={(e) => {
              const accessAllowed = !formData.r12;
              setFormData({...formData, r12: accessAllowed});
            }}
          />
          <br/>
          R31:<input type="checkbox"
            value='R31'
            name='location'
            onChange={(e) => {
              const accessAllowed = !formData.r31;
              setFormData({...formData, r31: accessAllowed});
            }}
          />
          <br/>
          R32-35:<input type="checkbox"
            value='R32-35'
            name='location'
            onChange={(e) => {
              const accessAllowed = !formData.r3235;
              setFormData({...formData, r3235: accessAllowed});
            }}
          />
          <br/>
          SPF:<input type="checkbox"
            value='SPF'
            name='location'
            onChange={(e) => {
              const accessAllowed = !formData.spf;
              setFormData({...formData, spf: accessAllowed});
            }}
          />
          <br/>
          Other:<input type="checkbox"
            value='Other'
            name='location'
            onChange={(e) => {
              const accessAllowed = !formData.other;
              setFormData({...formData, other: accessAllowed});
            }}
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
