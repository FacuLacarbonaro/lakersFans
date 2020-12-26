import React, { useState } from "react";
import "./Squad.scss";
import Footer from "../../Footer/Footer";
import LebronJames from "../../../Assets/Images/jpg/Team/lebron_james.jpg";
import MarcGasol from "../../../Assets/Images/jpg/Team/marc_gasol.jpg";

const Squad = () => {
  const initialState = [
    {
      name: "Lebron",
      lastName: "James",
      img: LebronJames,
      id: 1,
      height: "6′10″",
      position: "FORWARD",
      birth: "11/20/1997",
      yearsPro: "2",
      weight: 200,
      from: "DAYTON/GREECE",
      number: 23,
    },
    {
      name: "Marc",
      lastName: "Gasol",
      img: MarcGasol,
      id: 2,
      height: "6′10″",
      position: "FORWARD",
      birth: "11/20/1997",
      yearsPro: "2",
      weight: 200,
      from: "DAYTON/GREECE",
      number: 14,
    },
    {
      name: "Marc",
      lastName: "Gasol",
      img: LebronJames,
      id: 3,
    },
    {
      name: "Marc",
      lastName: "Gasol",
      img: LebronJames,
      id: 4,
    },

    {
      name: "Marc",
      lastName: "Gasol",
      img: LebronJames,
      id: 5,
    },
  ];

  const [squad, setSquad] = useState(initialState);

  return (
    <div className="squad">
      <div className="squad__hero">
        <h3>The Squad</h3>
      </div>
      <div className="squad__blur" />

      <div className="squad__grid">
        {squad.map((item) => (
          <div className="item">
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
              className="squad__grid__item"
              style={{
                backgroundImage: `url('${item.img}')`,
                backgroundSize: "cover",
              }}
            >
              <div className="squad__grid__item__overlay">
                <div className="squad__grid__item__overlay__desc">
                  <div className="squad__grid__item__overlay__desc__row">
                    <h4>HEIGHT</h4>
                    <h4>{item.height}</h4>
                  </div>
                  <hr />

                  <div className="squad__grid__item__overlay__desc__row">
                    <h4>POSITION</h4>
                    <h4>{item.position}</h4>
                  </div>

                  <hr />

                  <div className="squad__grid__item__overlay__desc__row">
                    <h4>DATE OF BIRTH</h4>
                    <h4>{item.birth}</h4>
                  </div>

                  <hr />

                  <div className="squad__grid__item__overlay__desc__row">
                    <h4>YEARS PRO</h4>
                    <h4>{item.yearsPro}</h4>
                  </div>

                  <hr />

                  <div className="squad__grid__item__overlay__desc__row">
                    <h4>WEIGHT</h4>
                    <h4>{item.weight}</h4>
                  </div>

                  <hr />

                  <div className="squad__grid__item__overlay__desc__row">
                    <h4>FROM</h4>
                    <h4>{item.from}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Squad;
