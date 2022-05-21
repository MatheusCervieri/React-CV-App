import React from 'react'

export default function Cveducation({name , degree,  startdate, enddate, id, setarray }) {
    function removethis(){
        setarray(preveducations => {
            let neweducationarray  = [...preveducations];
            let neweducationarraywithouthis = neweducationarray.filter(education => education.id != id);
            return (neweducationarraywithouthis);
        });
    }
  return (
    <div>
      <div><h3>Education - {name}</h3></div>
        <div>Degree: {degree}</div>
        <br></br>
        <div>Start Date: {startdate}</div>
        <div>Enddate: {enddate}</div>
        <br></br>
        <div><button onClick={removethis}>Remove Education</button></div>
    </div>
  )
}
