// import { useRef, useEffect, useState } from 'react';
import "./Sidenav.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion'

function Sidenav(props) {
  const divStyle = {
    display: "none",
  };


  


  return (
    <nav className="side-navbar">
    
   
      {props.number == "1" ? (
        <>
        <hr className="active-hr"/>
        <p className="numbers-marc one">1</p>
        </>
      ) : (
        <>
        <hr className="inactive-hr"/>
        <p className="numbers-marc one" style={divStyle}>
          1
        </p>
        </>
      )}
    
      
      
     
      {props.number == "2" ? (
        <>
        <hr className="active-hr"/>
        <p className="numbers-marc two">2</p>    
        </>
      ) : (
  <>
  <hr className="inactive-hr"/>
        <p className="numbers-marc two" style={divStyle}>
          2
          </p>
        </>
      )}
      

      
     
      {props.number == "3" ? (
        <>
        <hr className="active-hr"/>
        <p className="numbers-marc three">3</p>
        </>
      ) : (
<>
<hr className="inactive-hr"/>
        <p className="numbers-marc three" style={divStyle}>
          3
          </p>
      </>  
      )}
      

      
     
      {props.number == "4" ? (
        <>
        <hr className="active-hr"/>
        <p className="numbers-marc four">4</p>
        </>
      ): (
<>
<hr className="inactive-hr"/>
        <p className="numbers-marc four" style={divStyle}>
          4
          </p>
      </>  
      )}
      
    
     
    
      {props.number == "5" ? (
        <>
       <hr className="active-hr"/>
        <p className="numbers-marc five">5</p>
        </>
      ) : (
        <>
        <hr className="inactive-hr"/>
        <p className="numbers-marc five" style={divStyle}>
          5
        </p>
        </>
      )}
      
    
     
    </nav>
  );
}

export default Sidenav;
