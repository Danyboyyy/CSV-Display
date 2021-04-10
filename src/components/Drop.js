import React, { useState } from 'react'
import { Alert, Container } from 'react-bootstrap';
import { parse } from 'papaparse';
import Show from './Show';

const Drop = () => {
  const [display, setDisplay] = useState(true);
  const [csv, setCsv] = useState([]);
  const [name, setName] = useState("");
  const [areaColor, setAreaColor] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
  }
  
  const handleDrop = async (e) => {
    e.preventDefault();
    setAreaColor(false);
    if ((e.dataTransfer.files[0].type === "application/vnd.ms-excel" || e.dataTransfer.files[0].type === "text/csv") && e.dataTransfer.files.length === 1) {
      setDisplay(true);
      setName(e.dataTransfer.files[0].name);
      const info = await e.dataTransfer.files[0].text();
      const text = parse(info, {header: true}).data;
      setCsv(() => [...text]);
    }
    else {
      setDisplay(false);
    }
  };

 return (
  <Container>
    <div className={`p-5 border border-5 ${areaColor ? "border-success" : "border-primary"}`} onDragOver={handleDrag} onDrop={handleDrop} onDragEnter={() => setAreaColor(true)} onDragLeave={() => setAreaColor(false)}>Drop here your CSV file</div>
    {
      display ?
        <Show csv={csv} name={name}/>
      :
        <Alert className="mt-1" variant="danger">You can only upload one csv file at a time!</Alert>
    }
  </Container>
 );
}

export default Drop;