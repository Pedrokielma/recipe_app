import React from "react";
import "./Community.css";
import lines from "../../images/lines.png";
import smallPoints from "../../images/small-points.png";
import bigPoints from "../../images/big-points.png";
import Posts from '../../Components/Posts/Posts'



// function Posts(props){
//   return(
//     <div className= {`community-posts ${props.classpost}`}>
//         <div className="image-div">
//           <img className="insta-logo" src={insta} alt="insta" />
//           <div
//             className="image-post"
//             style={{
//               backgroundImage:`url(${props.imagePost})`,
//             }}
//           />
//         </div>

//         <div className="post-content">
//           <h5>{props.instaUser}</h5>
//           <p className="post-description">
//            {props.postDescription}
//           </p>
//           <div className="comments-likes-div">
//             <div className="comments-likes">
//               <img className="insta-icons" src={comment} alt="commetn" />
//               <p>{props.commentsNumber}</p>
//             </div>
//             <div className="comments-likes">
//               <img className="insta-icons" src={like} alt="like" />
//               <p>{props.likeNumbers}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }



function Community() {
  return (
    <div className="community-section">
      <div className="commuity-title">
        {/* <h2><span className='first-community-title'>MEET OUR</span><span className='second-community-title'>COMMUNITY</span></h2> */}
        <h2>MEET OUR COMMUNITY</h2>

        <a href="/">KNOW MORE</a>
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
      classPost='post-one' 
      imagePost='url(https://www.milesteaandcoffee.com/userfiles/article/5d230fb19491a-tacos.jpg)'
      instaUser='@love_food'
      postDescription='It’s taco Tuesday! These tacos from @jesseszewczyk have no added
            sugars and are SO good 🌮. Find the recipe from the link in our bio!
            📸: @taylormillerphoto'
      commentsNumber='152'
      likesNumber='18,2K'

      />
      <Posts 
      classPost='post-two'
      imagePost='url(https://www.kyleecooks.com/wp-content/uploads/2020/11/Oatmeal-Waffles-SQ-1.jpg)'
      instaUser='@love_food'
      postDescription=' Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
            dark chocolate with coconut and milk chocolate with peanuts! [📷:
            @foodwithmichel] #lovefood'
      commentsNumber='152'
      likesNumber='18,2K'

      />
      <Posts 
      classPost='post-three' 
      imagePost='url(http://onthelist.com.br/uploads/2015/01/DSCN8295.jpg)'
      instaUser='buzzfeedfood'
      postDescription='Getting into long weekend mode like 🍤 #pancitpalabok (📷
            @jeepneynyc)'
      commentsNumber='152'
      likesNumber='18,2K'

      />

      {/* <div className="community-posts post-one">
        <div className="image-div">
          <img className="insta-logo" src={insta} alt="insta" />
          <div
            className="image-post"
            style={{
              backgroundImage: `url(https://www.milesteaandcoffee.com/userfiles/article/5d230fb19491a-tacos.jpg)`,
            }}
          />
        </div>

        <div className="post-content">
          <h5>@buzzfeedfood</h5>
          <p className="post-description">
            It’s taco Tuesday! These tacos from @jesseszewczyk have no added
            sugars and are SO good 🌮. Find the recipe from the link in our bio!
            📸: @taylormillerphoto
          </p>
          <div className="comments-likes-div">
            <div className="comments-likes">
              <img className="insta-icons" src={comment} alt="commetn" />
              <p>152</p>
            </div>
            <div className="comments-likes">
              <img className="insta-icons" src={like} alt="like" />
              <p>18,2K</p>
            </div>
          </div>
        </div>
      </div>
      <div className="community-posts post-two">
        <div className="post-content">
          <h5>@love_food</h5>
          <p className="post-description">
            Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
            dark chocolate with coconut and milk chocolate with peanuts! [📷:
            @foodwithmichel] #lovefood
          </p>
          <div className="comments-likes-div">
            <div className="comments-likes">
              <img className="insta-icons" src={comment} alt="commetn" />
              <p>152</p>
            </div>
            <div className="comments-likes">
              <img className="insta-icons" src={like} alt="like" />
              <p>18,2K</p>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img className="insta-logo" src={insta} alt="insta" />
          <div
            className="image-post"
            style={{
              backgroundImage: `url(https://www.kyleecooks.com/wp-content/uploads/2020/11/Oatmeal-Waffles-SQ-1.jpg)`,
            }}
          />
        </div>
      </div>
      <div className="community-posts post-three">
        <div className="post-content">
          <h5>@buzzfeedfood</h5>
          <p className="post-description">
            Getting into long weekend mode like 🍤 #pancitpalabok (📷
            @jeepneynyc)
          </p>
          <div className="comments-likes-div">
            <div className="comments-likes">
              <img className="insta-icons" src={comment} alt="commetn" />
              <p>152</p>
            </div>
            <div className="comments-likes">
              <img className="insta-icons" src={like} alt="like" />
              <p>18,2K</p>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img className="insta-logo" src={insta} alt="insta" />
          <div
            className="image-post"
            style={{
              backgroundImage: `url(http://onthelist.com.br/uploads/2015/01/DSCN8295.jpg)`,
            }}
          />
        </div>
      </div> */}
    </div>
  );
}

export default Community;
