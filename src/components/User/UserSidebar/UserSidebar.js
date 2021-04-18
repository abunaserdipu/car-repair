import {
  faCommentDots,
  faHome,
  faList,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const UserSidebar = () => {
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
        <li>
          <Link to="/checkout" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
          </Link>
        </li>
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
      </ul>
    </div>
  );
};

export default UserSidebar;
