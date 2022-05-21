import React from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; //npm i uuid

export default function Experience(props) {
  const name = useRef("");
  const descripton = useRef("");
  const startdate = useRef();
  const enddate = useRef();
  const checkbox = useRef();

    function addexperience(){
      let realenddate = enddate.current.value;
      if(checkbox.current.checked == true)
      {
        realenddate = "I am steel doing this project";
      }
        props.btnfun(prevexperiences => {
          return [...prevexperiences, {id: uuidv4(), name: name.current.value, 
          descripition: descripton.current.value,
          startdate: startdate.current.value,
          enddate: realenddate
          }]
        });
        /*
        const name = form1.current.value;
        setArraytodos(prevtodos => {
          return [...prevtodos, {name: name, id: uuidv4(), checked: false}]
        });
        form1.current.value = "";
        */
    }
  return (
    <div>
        <h1>Experience</h1>
        <div>Experience Name</div>
        <input ref={name} type="text"></input>
        <div>Experience Description</div>
        <input ref={descripton} type="text"></input>
        <div>Experience Start Date</div>
        <input ref={startdate} type="date"></input>
        <div>End Date</div>
        <input ref={enddate} type="date"></input>
        <div>Not finished  <input ref={checkbox} type="checkbox"></input></div>
        <br/>
        <br/>
        <button onClick={addexperience}>Add Experience</button>
    </div>
  )
}
