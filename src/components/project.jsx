import React from "react";
import Thumb from "./thumb";

//sample object
// title: string
// descritpion: string
// image: string url
// things learned: jsx list?

const Project = (props) => {
  const { object } = props;
  return (
    <div className="project">
      <Thumb {...object} />
    </div>
  );
};

export default Project;
