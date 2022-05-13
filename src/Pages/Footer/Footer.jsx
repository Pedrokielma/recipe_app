import React from "react";
import "./Footer.css";
import Footersection from "./Components/Footersection";
import { GiKiwiFruit } from "react-icons/gi";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillDribbbleSquare,
} from "react-icons/ai";
import image from '../../images/noun-vegetables-3019268.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
        <div className="footer-sections">
          <Footersection number="1" />
          <Footersection number="2" />
          <Footersection number="3" />
          <Footersection number="4" />
          <Footersection number="5" />
        </div>
        <p className="footer-paragraf">
          2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor .
        </p>
      </div>
      <div className="rigth-footer">
        <GiKiwiFruit className="footer-logo" />
        {/* <img src={image} alt="" /> */}
        <div className="div-social-icons">

        <a href="https://www.facebook.com/">  <FaFacebookF className='social-icons'/></a>
        <a href="https://twitter.com/"> <AiOutlineTwitter className='social-icons' /></a>
        <a href="https://www.instagram.com/"><AiFillInstagram className='social-icons' /></a>
        <a href="https://www.linkedin.com/"> <FaLinkedinIn className='social-icons' /></a>
        <a href="https://dribbble.com/"><AiFillDribbbleSquare className='social-icons' /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
