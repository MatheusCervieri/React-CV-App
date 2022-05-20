import React from 'react'

export default function Cvpersonaldetails(props) {
  return (
    <div>
    <br></br>
    <div>Name: <div>{props.name}</div></div>
    <div>Email: <div>{props.email}</div></div>
    <div>Cidade: <div>{props.city}</div></div>
    <div>Pais: <div>{props.country}</div></div>
</div>
  )
}
