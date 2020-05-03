import React from "react";
// import Thumb from "./thumb";

const Project = (props) => {
  const { href, thumb, alt, description } = props;
  return (
    <div className="project">
      <a href={href}>
        <figure>
          <img className="thumb" src={thumb} alt={alt} />
        </figure>
        <ul>
          {/* <li>{alt}</li> */}
          <li className="project-description">{description}</li>
        </ul>
      </a>
    </div>
  );
};

export default Project;
