import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  function handleNameInputChange(event) {
    setName(event.target.value);
  }

  function handleAddNameClick() {
    setNamesList([...namesList, name]);
    setName('');
  }

  return (
    <div>
      <label>
        Full Name:
        <input type="text" value={name} onChange={handleNameInputChange} />
      </label>
      <button type="button" onClick={handleAddNameClick}>
        <span role="img" aria-label="Add Name">➕</span>
      </button>
      <ul>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameInput;