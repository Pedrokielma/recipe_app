import React from "react";
import "./Location.css";
import Title from "../../Components/Title/Title";
import { useInView } from "react-intersection-observer";

function Location(props) {
  const { ref: myRef, inView: navNumber } = useInView();

  if (navNumber) {
    props.changeNav("3");
  }

  return (
    <div ref={myRef} id="location">
      <div className="text-map">
        <Title content="LOCATION" />
        <div>
          <p>12 Upper St. Martin’s Lane WC2H 9FB, London</p>
        </div>
      </div>

      <iframe
        className="map"
        src="https://my.atlistmaps.com/map/28948e58-71ae-4ca7-bb9f-ccdb2fd26163?share=true"
        allow="geolocation"
        width="100%"
        height="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Location;
