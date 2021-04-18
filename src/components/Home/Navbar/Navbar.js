import React, { useContext } from "react";
import { Link } from "react-router-dom";
import repairIcon from "../../../images/repairIcon.png";
import { UserContext } from "../../../App.js";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand nav-animation" to="/">
          <img style={{ width: "50px" }} src={repairIcon} alt="" />
          <strong>Car Repair</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link ms-5 fw-bold" href="#banner">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 fw-bold" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 fw-bold" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 fw-bold" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 fw-bold" to="/login">
                Login
              </Link>
            </li>
            <li className="my-3">{loggedInUser.name}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
