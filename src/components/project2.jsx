import React from "react";

const Project = (props) => {
  const { href, thumb, alt, description, github } = props;
  return (
    <div className="project simplefocus">
      <a href={href}>
        <div className="linkdiv"></div>
        <figure>
          <img className="thumb" src={thumb} alt={alt} />

          <div className="imgdiv"></div>
        </figure>
      </a>
      <p className="project-name">{alt}</p>
      <p className="project-description">{description}</p>
      <ul className="project-tech">
        <li>
          <a href={github}>GitHub</a>
        </li>
        <li>tech1</li>
        <li>tech2</li>
        <li>tech3</li>
        <li>tech4</li>
        <li>tech5</li>
        <li>tech6</li>
      </ul>
    </div>
  );
};

export default Project;
