import React from 'react'
import { useRef } from 'react';

export default function Personaldetails(props) {
  return (
    <div>
      <h1>Personal Details</h1>
      <div>Name</div>
      <input type="form" ref={props.nameform} onChange={props.onchangeform}></input>
      <div>Email</div>
      <input type="form" ref={props.emailform} onChange={props.onchangeform}></input>
      <div>City</div>
      <input type="form" ref={props.cityform} onChange={props.onchangeform}></input>
      <div>Pais</div>
      <input type="form" ref={props.countryform} onChange={props.onchangeform}></input>
    </div>
  )
}
