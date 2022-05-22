import React, {useEffect} from "react";
import "./Posts.css";
import insta from "../../images/pink-instagram.svg";
import comment from "../../images/comments-icon.svg";
import like from "../../images/like-icon.svg";
import { motion } from 'framer-motion'


function Posts(props) {
  const postImages = {
    backgroundImage: props.imagePost,
  };



  useEffect(() => {
   
    props.animationFunction(props.speed)
    
  }, [props.inView]);

  return (
    <motion.div 
    initial={false}
    animate={props.animation}
    className={props.classPost}>
      <div className="image-div">
        <img className="insta-logo" src={insta} alt="insta" />
        <div className="image-post" style={postImages} />
      </div>

      <div className="post-content">
        <h5>{props.instaUser}</h5>
        <p className="post-description">{props.postDescription}</p>
        <div className="comments-likes-div">
          <div className="comments-likes">
            <img className="insta-icons" src={comment} alt="commetn" />
            <p>{props.commentsNumber}</p>
          </div>
          <div className="comments-likes">
            <img className="insta-icons" src={like} alt="like" />
            <p>{props.likesNumber}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Posts;
