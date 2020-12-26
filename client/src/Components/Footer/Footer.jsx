import React from "react";
import "./Footer.scss";
import {
  FaYoutube,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UC8CSt-oVqy8pUAoKSApTxQw"
        >
          <FaYoutube className="icon" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/losangeleslakers"
        >
          <FaFacebookSquare className="icon" />
        </a>
        <a rel="noreferrer" target="_blank" href="https://twitter.com/lakers">
          <FaTwitter className="icon" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/lakers"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="footer_bottom">
        <h3>Designed for Facundo Lacarbonaro. December 2020</h3>
      </div>
    </div>
  );
};

export default Footer;
