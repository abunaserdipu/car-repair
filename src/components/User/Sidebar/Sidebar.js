import {
  faCommentDots,
  faHome,
  faList,
  faGripHorizontal,
  faPlus,
  faTasks,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAdmin(data);
        }
      });
  }, [loggedInUser.email]);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        
        {isAdmin ? (
          <>
            <li>
              <Link to="/orderList" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageServices" className="text-white">
                <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/bookingList" className="text-white">
                <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/addReview" className="text-white">
                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
