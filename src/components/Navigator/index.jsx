import "./index.css";

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
  const { pathname } = useLocation();

  const targetPageLink = (target) => {
    if (pathname === target) return "here";
  };

  return (
    <nav className="navigator">
      <ul>
        <li id={targetPageLink("/")}>
          <Link to="/">
            <img src="./src/assets/PhoneIcon.png" />
          </Link>
        </li>
        <li id={targetPageLink("/user")}>
          <Link to="/user">
            <img src="./src/assets/UserIcon.png" />
          </Link>
        </li>
        <li>
          <Link className="middle-phone" to="/phone">
            <div className="circle-phone"></div>
            <div className="small-circle-phone">
              <div className="dot-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </Link>
        </li>
        <li id={targetPageLink("/gear")}>
          <Link to="/gear">
            <img src="./src/assets/GearIcon.png" />
          </Link>
        </li>
        <li id={targetPageLink("/record")}>
          <Link to="/record">
            <img src="./src/assets/ButtonIcon.png" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
