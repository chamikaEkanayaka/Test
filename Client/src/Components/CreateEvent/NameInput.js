import React, { useState } from 'react';
import "../CreateEvent/NameInput.css";

function NameInput(props) {
  const {
    namesList,
    setNamesList
  } = props;

  const [name, setName] = useState('');

  function handleNameInputChange(event) {
    setName(event.target.value);
  }

  function handleAddNameClick() {
    if(name!==""){
      setNamesList([...namesList, name]);
      setName('');
    }
  }

  function handleClearNamesClick() {
    setNamesList([]);
  }

  return (
    <div>
      <div class="inFileContent">
        <label>
          <input type="text" value={name} placeholder="Enter Full Name" onChange={handleNameInputChange} class="inpNmeFld"/>
        </label>
        <button type="button" onClick={handleAddNameClick} class="addNmeFld">
          <span role="img" aria-label="Add Name">➕</span>
        </button>
      </div>
      <ul>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {namesList.length > 0 && (
        <div class="clrBttnDiv">
          <button type="button" onClick={handleClearNamesClick} class="clrNmeFld">
            <span role="img" aria-label="Clear Names">Clear Members</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default NameInput;