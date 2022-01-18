import React, { useState } from 'react';

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState({
    text: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>New Task Form Placeholder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text"
            value={formData.text}
            onChange={(e) => setFormData({...formData, text: e.target.value})}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewTaskForm;
