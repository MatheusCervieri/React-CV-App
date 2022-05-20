import React from 'react'

export default function Cvexperience({name , description, startdate, enddate}) {
  return (
    <div>
    <div>
    <h3>Experience - {name}</h3>
    </div>
    <div>{description}</div>
    <br/>
    <div>Start date: {startdate}</div>
    <div>End Date: {enddate}</div>
    </div>
  )
}
