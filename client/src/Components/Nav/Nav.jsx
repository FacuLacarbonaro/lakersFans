import React from "react";
import "../../Assets/Colors/Colors.scss";
import "./Nav.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <Button />
    </div>
  );
};

export default Nav;
