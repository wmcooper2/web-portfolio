import React from "react";

const SocialLink = (props) => {
  return (
    <span>
      <a href={props.href} alt={props.alt}>
        {props.logo}
      </a>
    </span>
  );
};

export default SocialLink;
