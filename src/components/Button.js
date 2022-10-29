import React from "react";
import "./Button.css";

const ProfileLink = ({ children, link, ...otherProps }) => {
  return (
    <a href={link} target="_blank" className="link" {...otherProps}>
      {children}
    </a>
  );
};
export default ProfileLink;

/*
import "./ProfileLink.css";

function ProfileLink(props) {
  return (
    <div>
      <a className="link" href="www.google.com" id="zuri_btn">
        {props.title}
      </a>
    </div>
  );
}
export default ProfileLink;
*/
