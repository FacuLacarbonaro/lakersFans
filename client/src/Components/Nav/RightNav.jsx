import React from "react";
import styled from "styled-components";
import "./RightNav.scss";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul className="Ul" open={open}>
      <Link to="/" className="link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="link">
        <li>About us</li>
      </Link>
      <Link to="/squad" className="link">
        <li>Squad</li>
      </Link>
      <Link to="/news" className="link">
        <li>News</li>
      </Link>
      <Link to="/shop" className="link">
        <li>Shop</li>
      </Link>
      <Link to="/contact" className="link">
        <li>Contact</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
