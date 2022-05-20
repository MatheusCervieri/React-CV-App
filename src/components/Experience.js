import React from 'react'

export default function Experience(props) {
    function addexperience(){
        props.btnfun([]);
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
        <input type="text"></input>
        <div>Experience Description</div>
        <input type="text"></input>
        <div>Experience Start Date</div>
        <input type="date"></input>
        <div>End Date</div>
        <input type="date"></input>
        <br/>
        <br/>
        <button onClick={addexperience}>Add Experience</button>
    </div>
  )
}
