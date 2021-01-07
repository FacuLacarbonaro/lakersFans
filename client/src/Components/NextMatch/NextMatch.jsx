import React from "react";
import Fade from "react-reveal/Fade";

import styled from "styled-components";
import Logo1 from "../../Assets/Images/png/celtics-logo.png";
import Logo2 from "../../Assets/Images/png/los-angeles-lakers-logo/los-angeles-lakers-logo-transparent.png";
import "./NextMatch.scss";

const ClubStyled = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
`;

const NextMatch = () => {
  return (
    <div className="nextMatch">
      <Fade top duration={1500} delay={300}>
        <h2>NEXT MATCH</h2>
      </Fade>
      <Fade left duration={1500}>
        <div className="nextMatch__card">
          <Fade top duration={1500} delay={300}>
            <h3 className="matchDay">February 7th, 2021</h3>
          </Fade>
          <div className="middle">
            <Fade bottom duration={1500} delay={300}>
              <ClubStyled
                style={{
                  backgroundImage: `url(${Logo1})`,
                  width: "6rem",
                  height: "6rem",
                  marginLeft: "1.5rem",
                }}
              />
            </Fade>
            <h3>VS</h3>
            <Fade bottom duration={1500} delay={1000}>
              <ClubStyled
                style={{
                  backgroundImage: `url(${Logo2})`,
                  width: "7rem",
                  height: "5rem",
                  marginRight: "1.5rem",
                }}
              />
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default NextMatch;
