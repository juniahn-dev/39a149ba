import "./index.css";

import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import PhoneIcon from "assets/PhoneIcon.png";
import UserIcon from "assets/UserIcon.png";
import GearIcon from "assets/GearIcon.png";
import ButtonIcon from "assets/ButtonIcon.png";
import useFetchActivities from "hooks/useFetchActivities";

const Navigator = () => {
  const { pathname } = useLocation();
  const { activities } = useFetchActivities();

  const targetPageLink = (target) => {
    if (pathname === target) return "here";
  };

  const missedCallCount = useMemo(() => {
    let missedCallCount = 0;

    activities.forEach((activity) => {
      activity.items.forEach((item) => {
        if (item.call_type === "missed") {
          missedCallCount++;
        }
      });
    });

    return missedCallCount;
  }, [activities]);

  return (
    <nav className="navigator">
      <ul>
        <li id={targetPageLink("/")}>
          <Link className="navigator-phone" to="/">
            <img src={PhoneIcon} alt="phone-icon" />
            {Number(missedCallCount) > 0 && <span>{missedCallCount}</span>}
          </Link>
        </li>
        <li id={targetPageLink("/user")}>
          <Link to="/user">
            <img src={UserIcon} alt="user-icon" />
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
            <img src={GearIcon} alt="gear-icon" />
          </Link>
        </li>
        <li id={targetPageLink("/record")}>
          <Link to="/record">
            <img src={ButtonIcon} alt="record-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
