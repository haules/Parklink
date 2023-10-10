import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_div">
      <footer>
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <ul>
          <li>
            <Link to="/">Support</Link>
          </li>

          <li>
            <Link to="/">Privacy and Policy</Link>
          </li>
          <li>
            <Link to="/">How it Works</Link>
          </li>

          <li>
            <Link to="/">Terms & Conditions</Link>
          </li>

          <li>
            <Link to="/">About ParkLink</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
