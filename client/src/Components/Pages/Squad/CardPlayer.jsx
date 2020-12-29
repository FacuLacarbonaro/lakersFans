import React from "react";

import "./CardPlayer.scss";

const CardPlayer = ({ item }) => {
  return (
    <div className="cardPlayer" key={item._id}>
      <div className="squad__grid__title">
        <div className="squad__grid__title__number">
          <h2>{item.number}</h2>
        </div>
        <div className="squad__grid__title__name">
          <p>{item.name}</p>
          <h3>{item.lastName}</h3>
        </div>
      </div>

      <div
        key={item.id}
        className="squad__grid__img"
        style={{
          backgroundImage: `url('${item.img}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="squad__grid__img__overlay">
          <div className="squad__grid__img__overlay__desc">
            <div className="squad__grid__img__overlay__desc__row">
              <h4>HEIGHT</h4>
              <h4>{item.height}</h4>
            </div>
            <hr />

            <div className="squad__grid__img__overlay__desc__row">
              <h4>POSITION</h4>
              <h4>{item.position}</h4>
            </div>

            <hr />

            <div className="squad__grid__img__overlay__desc__row">
              <h4>DATE OF BIRTH</h4>
              <h4>{item.date}</h4>
            </div>

            <hr />

            <div className="squad__grid__img__overlay__desc__row">
              <h4>YEARS PRO</h4>
              <h4>{item.yearsPro}</h4>
            </div>

            <hr />

            <div className="squad__grid__img__overlay__desc__row">
              <h4>WEIGHT</h4>
              <h4>{item.weight}</h4>
            </div>

            <hr />

            <div className="squad__grid__img__overlay__desc__row">
              <h4>FROM</h4>
              <h4>{item.from}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlayer;
