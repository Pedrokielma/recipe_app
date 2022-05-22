import React, { useEffect, useState } from "react";
import "./Community.css";
import lines from "../../images/lines.png";
import smallPoints from "../../images/small-points.png";
import bigPoints from "../../images/big-points.png";
import Posts from "../../Components/Posts/Posts";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Community(props) {
  const animationFromBottom = useAnimation();

  const { ref: myRef, inView } = useInView({
    threshold: 0.6,
  });

  if (inView) {
    props.changeNav("2");
  }

  const animationFunction = (speed) => {
    if (inView) {
      animationFromBottom.start({
        y: 0,
        transition: {
          duration: speed,
        },
      });
    } else {
      animationFromBottom.start({
        y: "100vw",
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <div ref={myRef} id="community-section">
      <div className="commuity-title">
        <hr className="title-line" />
        <Title lines="two-lines" content="MEET OUR COMMUNITY" />
        <Button color="pink-button" link="/" content="KNOW MORE" />
        <h4>
          LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA
          ENTALTO
        </h4>
      </div>

      <div className="icons-background">
        <img className="insta-icons big-points" src={bigPoints} alt="icon" />
        <img className="insta-icons lines" src={lines} alt="icon" />
        <img
          className="insta-icons small-points"
          src={smallPoints}
          alt="icon"
        />
      </div>

      <Posts
        animationFunction={animationFunction}
        animation={animationFromBottom}
        inView={inView}
        speed="0.6"
        classPost="post-one"
        imagePost="url(https://www.milesteaandcoffee.com/userfiles/article/5d230fb19491a-tacos.jpg)"
        instaUser="@love_food"
        postDescription="It’s taco Tuesday! These tacos from @jesseszewczyk have no added
            sugars and are SO good 🌮. Find the recipe from the link in our bio!
            📸: @taylormillerphoto"
        commentsNumber="152"
        likesNumber="18,2K"
      />

      <Posts
        animationFunction={animationFunction}
        animation={animationFromBottom}
        inView={inView}
        speed="0.8"
        classPost="post-two"
        imagePost="url(https://www.kyleecooks.com/wp-content/uploads/2020/11/Oatmeal-Waffles-SQ-1.jpg)"
        instaUser="@love_food"
        postDescription=" Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
            dark chocolate with coconut and milk chocolate with peanuts! [📷:
            @foodwithmichel] #lovefood"
        commentsNumber="152"
        likesNumber="18,2K"
      />
      {/* <p ref={myRef}></p> */}
      <Posts
        animationFunction={animationFunction}
        animation={animationFromBottom}
        inView={inView}
        speed="0.8"
        classPost="post-three"
        imagePost="url(http://onthelist.com.br/uploads/2015/01/DSCN8295.jpg)"
        instaUser="buzzfeedfood"
        postDescription="Getting into long weekend mode like 🍤 #pancitpalabok (📷
            @jeepneynyc)"
        commentsNumber="152"
        likesNumber="18,2K"
      />
    </div>
  );
}

export default Community;
