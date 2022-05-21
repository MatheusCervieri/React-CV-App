import React from 'react'
import Cveducation from './Cveducation'

export default function Cveducations({array , setArray}) {
  return (
    array.map(education => {
        return <Cveducation name={education.name} degree={education.degree} startdate={education.startdate} enddate={education.enddate} id={education.id} key={education.id} setarray={setArray}/>
    })
  )
}
