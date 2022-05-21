import React from 'react'
import Cvexperience from './Cvexperience'

export default function Cvexperiences(props) {
 
    return (
        props.array.map(experience => {
            return <Cvexperience key={experience.id} id={experience.id} name={experience.name} description={experience.descripition} startdate={experience.startdate} enddate={experience.enddate} setArray={props.setArray}/>
        })
      )
  
}
