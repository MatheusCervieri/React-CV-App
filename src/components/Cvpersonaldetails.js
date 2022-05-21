import React from 'react'

export default function Cvpersonaldetails(props) {
  return (
    <div>
    <br></br>
    <h1>Your CV!</h1>
    <div><h2>Personal Details</h2></div>
    <div>Name: <div>{props.name}</div></div>
    <div>Email: <div>{props.email}</div></div>
    <div>Cidade: <div>{props.city}</div></div>
    <div>Pais: <div>{props.country}</div></div>
</div>
  )
}
