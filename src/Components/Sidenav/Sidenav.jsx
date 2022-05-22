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
    <motion.div>
   
      {props.number == "1" ? (
       <>
       <hr />
        <p className="numbers-marc one">1</p>
      </>
      ) : (
        <>
        <hr />
        <p className="numbers-marc one" style={divStyle}>
          1
        </p>
        </>
      )}
    </motion.div>
      
      <motion.div>
     
      {props.number == "2" ? (
       <>
       <hr />
        <p className="numbers-marc two">2</p>    
      </>
      ) : (
  <>
  <hr />
        <p className="numbers-marc two" style={divStyle}>
          2
          </p>
        </>
      )}
      </motion.div>

      <motion.div>
     
      {props.number == "3" ? (
       <>
       <hr />
        <p className="numbers-marc three">3</p>
      </>
      ) : (
<>
<hr />
        <p className="numbers-marc three" style={divStyle}>
          3
          </p>
      </>  
      )}
      </motion.div>

      <motion.div>
     
      {props.number == "4" ? (
       <>
       <hr />
        <p className="numbers-marc four">4</p>
      </>
      ): (
<>
<hr />
        <p className="numbers-marc four" style={divStyle}>
          4
          </p>
      </>  
      )}
      </motion.div>
    
     <motion.div>
    
      {props.number == "5" ? (
       <>
       <hr />
        <p className="numbers-marc five">5</p>
      </>
      ) : (
        <>
        <hr />
        <p className="numbers-marc five" style={divStyle}>
          5
        </p>
        </>
      )}
      
     </motion.div>
     
    </nav>
  );
}

export default Sidenav;
