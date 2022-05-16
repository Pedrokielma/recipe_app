// import { useRef, useEffect, useState } from 'react';
import "./Sidenav.css";

function Sidenav(props) {
  const divStyle = {
    display: "none",
  };

  return (
    <nav className="side-navbar">
      <hr />
      {props.number == "1" ? (
        <p className="numbers-marc one">1</p>
      ) : (
        <p className="numbers-marc one" style={divStyle}>
          1
        </p>
      )}
      <hr />
      {props.number == "2" ? (
        <p className="numbers-marc two">2</p>
      ) : (
        <p className="numbers-marc two" style={divStyle}>
          2
        </p>
      )}

      <hr />
      {props.number == "3" ? (
        <p className="numbers-marc three">3</p>
      ) : (
        <p className="numbers-marc three" style={divStyle}>
          3
        </p>
      )}
      <hr />
      {props.number == "4" ? (
        <p className="numbers-marc four">4</p>
      ) : (
        <p className="numbers-marc four" style={divStyle}>
          4
        </p>
      )}
      <hr />
      {props.number == "5" ? (
        <p className="numbers-marc five">5</p>
      ) : (
        <p className="numbers-marc five" style={divStyle}>
          5
        </p>
      )}
    </nav>
  );
}

export default Sidenav;
