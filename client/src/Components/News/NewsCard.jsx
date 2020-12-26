import React from "react";

import "./NewsCard.scss";

const NewsCard = ({ img, text, size }) => {
  return (
    <div
      className="newsCard"
      style={{ backgroundImage: `url(${img})`, backgroundSize: `${size}` }}
    >
      <div className="description">{text}</div>
    </div>
  );
};

export default NewsCard;
