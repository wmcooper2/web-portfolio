import React from "react";

const Project = (props) => {
  const { href, thumb, alt, description } = props;
  return (
    <div className="project darkfocus">
      <a href={href}>
        <figure>
          <img className="thumb" src={thumb} alt={alt} />
          <figcaption>{alt}</figcaption>
        </figure>
        <ul>
          <li className="project-description">{description}</li>
        </ul>
      </a>
    </div>
  );
};

export default Project;
