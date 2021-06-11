import React from "react";
import SocialLink from "./socialLink";
import Badge from "./badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  // faCodepen,
  // faFreeCodeCamp,
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

const pcepBadge = {
  logo: "pcepcert.png",
  alt: "PCEP Badge",
  href: "https://www.credly.com/earner/earned/badge/c8ce2fd3-96a6-4daa-a45a-fd52001fc3e5",
}

const aPlusBadge = {
  logo: "apluscert.png",
  alt: "A+ Badge",
  href: "https://www.credly.com/earner/earned/badge/aed399cc-104b-45f7-a10f-a6fb04e69e4e",
}

// const codePen = {
// logo: SocialNavLink(faCodepen, "codepen"),
// alt: "Codepen",
// href: "https://codepen.io/wmcooper2",
// };

// const freeCodeCamp = {
// logo: SocialNavLink(faFreeCodeCamp, "freecodecamp"),
// alt: "Free Code Camp",
// href: "https://www.freecodecamp.org/wmcooper2",
// };

const meetup = {
  logo: SocialNavLink(faMeetup, "meetup"),
  alt: "Meetup",
  href: "https://www.meetup.com/members/220584428/",
};

const Home = () => {
  return (
    <div className="welcome">
      <h1 className="welcome-title">Welcome</h1>
      <p className="about-me">
        I am a strong generalist and would be a good addition to a team who
        wants to bridge the gap between specialties. I primarily make web apps
        using MongoDB, Express, React and Node, and backend programs with
        Python.
      </p>
      <p className="welcome-message">
        See my projects from the links above, <br /> or follow me down below.
      </p>
      <ul className="social-media-nav">
        <li>
          <SocialLink {...linkedIn} />
        </li>
        <li>
          <SocialLink {...gitHub} />
        </li>
        <li>
          <SocialLink {...meetup} />
        </li>
      </ul>
      <div className="badge-container">
        <Badge {...pcepBadge}/>
        <Badge {...aPlusBadge}/>
      </div>
    </div>
  );
};

export default Home;
