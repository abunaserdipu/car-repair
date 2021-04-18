import {
  faFileAlt,
  faGripHorizontal,
  faHome,
  faPlus,
  faTasks,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
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
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span>
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-white">
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
      </ul>
    </div>
  );
};

export default AdminSidebar;
