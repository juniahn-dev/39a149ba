import "./index.css";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import PhoneIcon from "../../assets/PhoneIcon.png";
import UserIcon from "../../assets/UserIcon.png";
import GearIcon from "../../assets/GearIcon.png";
import ButtonIcon from "../../assets/ButtonIcon.png";

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
            <img src={PhoneIcon} />
          </Link>
        </li>
        <li id={targetPageLink("/user")}>
          <Link to="/user">
            <img src={UserIcon} />
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
            <img src={GearIcon} />
          </Link>
        </li>
        <li id={targetPageLink("/record")}>
          <Link to="/record">
            <img src={ButtonIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
