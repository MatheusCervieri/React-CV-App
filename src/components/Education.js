import React from 'react'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'; //npm i uuid

export default function Education({btnfun, array}) {
    const schoolname = useRef();
    const degree = useRef();
    const startdate = useRef();
    const enddate = useRef();

    function addEducation(){
        btnfun(preveducation => {
            return [...preveducation, {id: uuidv4(), name: schoolname.current.value, 
            degree: degree.current.value,
            startdate: startdate.current.value,
            enddate: enddate.current.value
            }]
          });
        
    }
  return (
    <div>
        <div><h1>Education</h1></div>
        <div>School Name:</div>
        <div><input ref={schoolname} type="text"></input></div>
        <div>Degree:</div>
        <div><input ref={degree} type="text"></input></div>
        <div>Education Start Date: </div>
        <div><input ref={startdate} type="date"></input></div>
        <div>Education End Date: </div>
        <div><input ref={enddate} type="date"></input></div>
        <br></br>
        <button onClick={addEducation}>Add Education</button>
    </div>
  )
}
