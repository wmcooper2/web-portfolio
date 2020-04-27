import React from "react";

const Thumb = (props) => {
  const { href, thumbnail, altText, description } = props;
  return (
    <React.Fragment>
      <a href={href}>
        <figure>
          <img className="thumb" src={thumbnail} alt={altText} />
        </figure>
        <ul>
          <li>{altText}</li>
          <li>{description}</li>
        </ul>
      </a>
    </React.Fragment>
  );
};

export default Thumb;
