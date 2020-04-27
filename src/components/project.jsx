import React from "react";

const Project = (props) => {
  const { object } = props;
  return <div className="project">{object.text}</div>;
};

export default Project;
