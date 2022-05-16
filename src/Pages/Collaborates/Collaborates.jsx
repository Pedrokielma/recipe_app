import React from "react";
import "./Collaborates.css";
import Title from "../../Components/Title/Title";
import Forminputs from "./Components/Forminputs/Forminputs";
import icon from "../../images/big-points.png";
import Button from "../../Components/Button/Button";
import { useInView } from "react-intersection-observer";

function Colaborates(props) {
  const { ref: myRef, inView: navNumber } = useInView();

  if (navNumber) {
    props.changeNav("5");
  }

  return (
    <div ref={myRef} id="clolaborate-section">
      <div className="colaborates-title">
        <h2 className="colaborates-title-first">COLLABORATES</h2>
        <hr className="colaborates-title-line" />
        <Title lines="one-line" content="WITH US" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
      <div className="right-collaborate">
        <img src={icon} alt="icon" />
        <form className="collaborate-form" action="">
          <Forminputs htmlfor="NAME" type="Text" />
          <Forminputs htmlfor="SURNAME" type="Text" />
          <Forminputs htmlfor="PHONE" type="Phone" />
          <Forminputs htmlfor="EMAIL ADRESS" type="Email" />
          <Forminputs htmlfor="EXPERIENCE" type="Select" />
          <Forminputs htmlfor="WHERE DID YOU HERARD ABOUT US" type="Select" />
        </form>
        <div className="collaborate-button">
          <Button color="black-button" content="SEND" herf="/" />
        </div>
      </div>
    </div>
  );
}

export default Colaborates;
