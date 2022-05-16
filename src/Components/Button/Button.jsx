import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <a className={props.color} link={props.herf}>
      {props.content}
    </a>
  );
}

export default Button;
