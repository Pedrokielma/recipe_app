import React from "react";
import "./Navbar.css";
import Navlink from "./Components/Navlink";

// function Navbar() {
//   return(
//     <nav className='navbar'>
//     <section className='section-nav'>
//     <Logo/>
//     <NavLink href="#about">ABOUT</NavLink>
//     </section>
//     </nav>
//   )
// }

// function NavLink({text, href}) {
//   return <a className='nav-items' href={href}>{text}</a>
// }

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <section className="section-nav">
          <Navlink text="LOGO" herf="" />
          <Navlink text="ABOUT" herf="" />
          <Navlink text="COMMUNITY" herf="" />
          <Navlink text="LOCATION" herf="" />
          <Navlink text="OUR MANU" herf="" />
          <Navlink text="RECIPES" herf="" />
        </section>
        <section className="section-nav">
          <Navlink text="CONTACT" herf="" />
          <Navlink text="LOGIN" herf="" />
        </section>
      </nav>
    </>
  );
}

export default Navbar;
