import React from "react";
import "./Profile.css";

function Profile() {
  /*const [width] = React.useState(window.innerWidth);
  const breakpoint = 768;*/
  return (
    <header className="header">
      <div className="share-icon">
        <img
          src="img/share-avater-icon.svg"
          alt="share icon"
          className="share"
        />
        <img src="img/dotted-hamburger.svg" alt="menu icon" className="menu" />
      </div>
      <div className="user-profile">
        <img src="img/picture.jpg" alt="user" className="picture"></img>
      </div>
      <div className="username">
        <h1 className="myname" id="twitter">
          Divine James
        </h1>
        <h3 className="hide" id="slack">
          Divine James
        </h3>
      </div>
    </header>
  );
}
export default Profile;
