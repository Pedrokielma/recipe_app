import React from 'react'
import './Forminputs.css'

function Forminputs(props) {
  return (
    <div className='input'>
      <label htmlFor={props.htmlfor}>{props.htmlfor}</label>
      <input type={props.type} placeholder={props.type} />
    </div>
  )
}

export default Forminputs
