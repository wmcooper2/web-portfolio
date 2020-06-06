import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
  const { href, thumb, alt, description, github, skills } = props;
  let techSkills = skills.map((skill) => {
    return <li>{skill}</li>;
  });

  return (
    <div className="project simplefocus">
      <a href={href}>
        <div className="linkdiv"></div>
        <figure>
          <img className="thumb" src={thumb} alt={alt} />
          <div className="imgdiv"></div>
        </figure>
      </a>
      <p className="project-name">
        <a href={github}>
          <FontAwesomeIcon icon={faGithub} className="projectGit" />
        </a>
        {alt}
      </p>
      <p className="project-description">{description}</p>
      <ul className="project-tech">{techSkills}</ul>
    </div>
  );
};

export default Project;
