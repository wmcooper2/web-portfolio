import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faMeetup,
} from "@fortawesome/free-brands-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";

const linkedin = (
  <FontAwesomeIcon icon={faLinkedin} className="socialmedia" id="linkedin" />
);
const github = (
  <FontAwesomeIcon icon={faGithub} className="socialmedia" id="github" />
);
const codepen = (
  <FontAwesomeIcon icon={faCodepen} className="socialmedia" id="codepen" />
);
const freecodecamp = (
  <FontAwesomeIcon icon={faFreeCodeCamp} className="socialmedia" id="github" />
);
const meetup = (
  <FontAwesomeIcon icon={faMeetup} className="socialmedia" id="meetup" />
);

const Home = () => {
  return (
    <div className="welcome">
      <span className="welcome-title">Welcome</span>
      <p className="welcome-message">
        Check out my projects from the links above.
      </p>
      <div>
        {linkedin} {github} {codepen} {freecodecamp} {meetup}
      </div>
    </div>
  );
};

export default Home;
