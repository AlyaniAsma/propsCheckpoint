import React from "react";
import propTypes from "prop-types";
import Image from "../Image.jpg";

import "typeface-roboto";

const Profile = ({ profile }) => {
  const handleName = (name) => alert(`Hello It's me ${name}`);
  return (
    <div>
      <div>
        <div>
          <h1>Profile</h1>
        </div>

        <div>
          <div>
            <div>
              <img src={Image} alt="img" />
              {profile.children}

              <button
                onClick={() => handleName(profile.name)}
              >
                show name{" "}
              </button>
            </div>
            <div>
              <h1>{profile.name}</h1>
              <p>{profile.bio}</p>
              <h4>{profile.profession}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  profile: propTypes.shape({ name: propTypes.string }),
  handleName: propTypes.func,
};
Profile.defaultProps = {
  name: "Nibrasse HMIDI",
  bio: "Bonjour! Je suis Nibrasse, une tunisienne vivant à Gafsa, développeur front-end passionnée de cuisine et de patisserie. Je partage avec vous ma collection de recettes sucrées et salées",
  profession: "développeur full-stack JavaScript",
};
export default Profile;

