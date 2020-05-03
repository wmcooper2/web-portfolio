import React from "react";
import SocialLink from "./socialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faMeetup,
} from "@fortawesome/free-brands-svg-icons";

const linkedIn = {
  logo: (
    <FontAwesomeIcon icon={faLinkedin} className="social-media" id="linkedin" />
  ),
  alt: "Linked In",
  href: "https://www.linkedin.com/in/wmcooper2/",
};

const gitHub = {
  logo: (
    <FontAwesomeIcon icon={faGithub} className="social-media" id="github" />
  ),
  alt: "GitHub",
  href: "https://github.com/wmcooper2",
};

const codePen = {
  logo: (
    <FontAwesomeIcon icon={faCodepen} className="social-media" id="codepen" />
  ),
  alt: "Codepen",
  href: "https://codepen.io/wmcooper2",
};

const freeCodeCamp = {
  logo: (
    <FontAwesomeIcon
      icon={faFreeCodeCamp}
      className="social-media"
      id="github"
    />
  ),
  alt: "Free Code Camp",
  href: "https://www.freecodecamp.org/wmcooper2",
};

const meetup = {
  logo: (
    <FontAwesomeIcon icon={faMeetup} className="social-media" id="meetup" />
  ),
  alt: "Meetup",
  href: "https://www.meetup.com/members/220584428/",
};

const Home = () => {
  return (
    <div className="welcome">
      <span className="welcome-title">Welcome</span>
      <p className="welcome-message">
        Check out my projects from the links above.
      </p>
      <div>
        <SocialLink {...linkedIn} />
        <SocialLink {...gitHub} />
        <SocialLink {...codePen} />
        <SocialLink {...freeCodeCamp} />
        <SocialLink {...meetup} />
      </div>
    </div>
  );
};

export default Home;
