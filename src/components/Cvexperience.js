import React from 'react'

export default function Cvexperience({id, name , description, startdate, enddate, setArray}) {
  function removeThisExperience(){
    setArray(prevexpiriences =>{
      const newarray = [...prevexpiriences];
      const experienceswithoutthis = newarray.filter(experience => experience.id != id);
      return experienceswithoutthis;
    });
  }
  return (
    <div>
    <div>
    <h3>Experience - {name}</h3>
    </div>
    <div>{description}</div>
    <br/>
    <div>Start date: {startdate}</div>
    <div>End Date: {enddate}</div>
    <br></br>
    <div><button onClick={removeThisExperience}>Remove Experience</button></div>
    </div>
  )
}
