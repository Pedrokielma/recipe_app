import React from 'react'
import './Button.css'

function Button(props){

    return  <a className='pink-button' link={props.herf}>{props.content}</a>
  }
  

export default Button