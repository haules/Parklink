import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="testDiv">
      {/* <img src="/images/logo.png" alt="Logo" className="logo"/> */}
      <div className="navBar">
        <nav>
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/support">Support</Link>
            </li>

            <li>
              <Link to="/paymentSolutions">Payment Solutions</Link>
            </li>

            <li>
              <Link to="/">How It Works</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default navbar;
