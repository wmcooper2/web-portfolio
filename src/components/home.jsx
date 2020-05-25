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

const SocialNavLink = (icon, idtag) => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={icon} className="social-media" id={idtag} />
      <div className="border-bottom-expand"></div>
    </React.Fragment>
  );
};

const linkedIn = {
  logo: SocialNavLink(faLinkedin, "linkedin"),
  alt: "Linked In",
  href: "https://www.linkedin.com/in/wmcooper2/",
};

const gitHub = {
  logo: SocialNavLink(faGithub, "github"),
  alt: "GitHub",
  href: "https://github.com/wmcooper2",
};

const codePen = {
  logo: SocialNavLink(faCodepen, "codepen"),
  alt: "Codepen",
  href: "https://codepen.io/wmcooper2",
};

const freeCodeCamp = {
  logo: SocialNavLink(faFreeCodeCamp, "freecodecamp"),
  alt: "Free Code Camp",
  href: "https://www.freecodecamp.org/wmcooper2",
};

const meetup = {
  logo: SocialNavLink(faMeetup, "meetup"),
  alt: "Meetup",
  href: "https://www.meetup.com/members/220584428/",
};

const Home = () => {
  return (
    <div className="welcome">
      <span className="welcome-title">Welcome</span>
      <p className="welcome-message">
        Check out my projects from the links above, or follow me down below.
      </p>
      <ul className="social-media-nav">
        <li>
          <SocialLink {...linkedIn} />
        </li>
        <li>
          <SocialLink {...gitHub} />
        </li>
        <li>
          <SocialLink {...codePen} />
        </li>
        <li>
          <SocialLink {...freeCodeCamp} />
        </li>
        <li>
          <SocialLink {...meetup} />
        </li>
      </ul>
    </div>
  );
};

export default Home;
