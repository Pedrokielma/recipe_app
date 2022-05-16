import React from "react";

function Navlink(props) {
  return (
    <a className="nav-items" href={props.href}>
      {props.text}
    </a>
  );
}

export default Navlink;
