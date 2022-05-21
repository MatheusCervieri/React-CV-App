import React from 'react'
import Cvexperiences from './Cvexperiences'
import Cvpersonaldetails from './Cvpersonaldetails'
import Cveducations from './Cveducations'

export default function Cvready(props) {
  return (
    <div>
        <Cvpersonaldetails name={props.name} email={props.email} city={props.city} country={props.country}/>
        <Cvexperiences array={props.experiencesarray} setArray={props.setArray}/>
        <Cveducations array={props.educationsarray} setArray={props.setEducationArray}/>
    </div>
  )
}