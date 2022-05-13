import React from 'react';
import './Footersection.css'

function Footersection(props){
    return(
        <div className='footer-section'>
        <h2>SECTION {props.number}</h2>
        <p>Subsection</p>
        <p>Subsection</p>
        <p>Subsection</p>
        <p>Subsection</p>
        </div>
    )
}


export default Footersection