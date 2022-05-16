import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Menu.css";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import { useInView } from "react-intersection-observer";

function Menu(props) {
  const [dishes, setDishes] = useState([]);

  const { ref: myRef, inView: myElementIsVisible } = useInView();

  if (myElementIsVisible) {
    props.changeNav("4");
  }

  const fetchDishes = async () => {
    try {
      let response = await axios.get(
        `https://studiographene-exercise-api.herokuapp.com/foods`
      );

      setDishes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div ref={myRef} id="menu">
      <div className="menu-title">
        <hr className="menu-title-line" />
        <Title lines="one-line" content="OUR MENU" />
        <Button color="pink-button" link="/" content="KNOW MORE" />
      </div>

      <div className="menu-sections starter">
        <Title lines="one-line position-titles" content="STARTERS" />

        {dishes.map((dishe) => {
          if (dishe.type === "starters")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </div>
      <hr />

      <div className="menu-sections main-course">
        <Title lines="two-lines position-titles" content="MAIN COURSES" />

        {dishes.map((dishe) => {
          if (dishe.type === "main_courses")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </div>
      <hr />
      <div className="menu-sections side">
        <Title lines="one-line position-titles" content="SIDES" />
        {dishes.map((dishe) => {
          if (dishe.type === "sides")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </div>
      <hr />
      <div className="menu-sections dessert">
        <Title lines="one-line position-titles" content="DESSERTS" />

        {dishes.map((dishe) => {
          if (dishe.type === "desserts")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </div>
    </div>
  );
}

export default Menu;
