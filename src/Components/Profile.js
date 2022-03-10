import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div>
      {children}

      <div className="name">{fullName}</div>
      <p className="text">
        <div className="bio">{bio}</div>
        <div className="profession">{profession}</div>
      </p>
      <button onClick={handleName}>Click me</button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "here",
  bio: "here is my bio",
  profession: "here is my profession",
  children: "here is my photo",
};
Profile.prototypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  children: propTypes.element,
  handleName: propTypes.func,
};
export default Profile;
