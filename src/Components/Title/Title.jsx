import React from 'react'
import './Title.css'


function Title(props){
    

    return <h2 id='titles' className={props.lines}>{props.content}</h2>
    
    }

export default Title
