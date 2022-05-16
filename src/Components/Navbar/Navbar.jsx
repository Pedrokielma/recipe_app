import React from "react";
import "./Navbar.css";
import Navlink from "./Components/Navlink";
import { GiKiwiFruit } from "react-icons/gi";




function Navbar() {
  return (
    <>
      <nav className="navbar">
        <section className="section-nav">
          <Navlink text={<GiKiwiFruit className="logo-nav" />} href="#home-section" />
          <Navlink text="ABOUT" href="#clolaborate-section" />
          <Navlink text="COMMUNITY" href="#community-section" />
          <Navlink text="LOCATION" href="#location" />
          <Navlink text="OUR MANU" href="#menu" />
        </section>
        <section className="section-nav">
          <Navlink text="CONTACT" href="#clolaborate-section" />
          <Navlink text="LOGIN" href="" />
        </section>
      </nav>
    </>
  );
}

export default Navbar;
