import React from "react";
import "./Aboutus.scss";
import Bye from "../../../Assets/Images/png/bye.png";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaInstagram, FaFolder } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__container">
        <div className="aboutus__container__title">
          <div className="aboutus__container__title__hero" />
          <h2>About us</h2>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          eveniet nemo aspernatur amet eos, neque minus beatae nihil sit
          veritatis, doloribus provident ipsam. Maiores ea iste non!
          Repellendus, commodi reprehenderit!
        </p>
        <div className="aboutus__container__title">
          <div className="aboutus__container__title__hero" />
          <h2>Developed by</h2>
        </div>
        <div className="aboutus__container__socialHero">
          <div
            className="aboutus__container__socialHero__banner"
            style={{ backgroundImage: `url(${Bye})` }}
          />
          <p>
            Facundo Lacarbonaro <br /> Frontend Developer
          </p>
        </div>
        <div className="aboutus__container__socialdev">
          <Link to="github.com">
            <FaGithub className="aboutus__container__socialdev__icon" />
          </Link>
          <Link to="github.com">
            <FaLinkedin className="aboutus__container__socialdev__icon" />
          </Link>
          <Link to="github.com">
            <FaInstagram className="aboutus__container__socialdev__icon" />
          </Link>
          <Link to="github.com">
            <FaFolder className="aboutus__container__socialdev__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
