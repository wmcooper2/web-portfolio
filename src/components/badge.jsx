import React from "react";

const Badge = (props) => {
  return (
    <span>
      <a href={props.href} alt={props.alt}>
          <img className="badge" src={props.logo}></img>
      </a>
    </span>
  );
};

export default Badge;