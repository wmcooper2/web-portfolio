import React from "react";

const AboutMe = (props) => {
  const { object } = props;

  return (
    <div
      className="aboutme"
      id={object.id}
      // style={{ top: object.top, left: object.left, fontSize: object.size }}
    >
      {/* {object.text} {object.top} {object.left} */}
      {object.text}
    </div>
  );
};

export default AboutMe;
