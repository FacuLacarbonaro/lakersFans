import React from "react";
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
      <h2>NEXT MATCH</h2>
      <div className="nextMatch__card">
        <h3 className="matchDay">February 7th, 2021</h3>
        <div className="middle">
          <ClubStyled
            style={{
              backgroundImage: `url(${Logo1})`,
              width: "6rem",
              height: "6rem",
              marginLeft: "1.5rem",
            }}
          />
          <h3>VS</h3>
          <ClubStyled
            style={{
              backgroundImage: `url(${Logo2})`,
              width: "7rem",
              height: "5rem",
              marginRight: "1.5rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NextMatch;
