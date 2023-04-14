import React, { useState } from 'react';
import "./NamedFileUpload.css";

function NamedFileUpload() {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    const newFile = { name: fileName, file: selectedFile };
    setFiles([...files, newFile]);
  };

  const handleFileRemove = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
  };

  return (
    <div>
      <div class="inFileContent">
        <input type="text" placeholder="Enter file name" value={fileName} onChange={(e) => setFileName(e.target.value)} class="inFileName"/>
        <input type="file" onChange={handleFileUpload} class="inFile" id="fileInput"/>
        <label className="customInput" htmlFor="fileInput">Choose File</label>
      </div>
      <div class="inEdFile">
        <table>
          {files.map((file, index) => (
            <tr>
            <div key={index}>
                <th><span>{file.name}</span> --</th>
                <th><span>{file.file.name}</span></th>
                <th><button onClick={() => handleFileRemove(index)} class="remButton">X</button></th>
            </div>
            </tr>
          ))}
          </table>
      </div>
    </div>
  );
}

export default NamedFileUpload;