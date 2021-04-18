import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <section className="top-banner" id="banner">
      <div className="container">
        <div className="text-center py-5">
          <div className="my-5 py-5">
            <h1 className="mb-3 text-white">A MECHANIC YOU TRUST</h1>
            <p className="fw-bold text-secondary">
              <FontAwesomeIcon icon={faCheck} style={{ color: "#319ce3" }} />{" "}
              QUICK & RELIABLE WHEEL INSPECTION
            </p>
            <p className="fw-bold text-secondary">
              <FontAwesomeIcon icon={faCheck} style={{ color: "#319ce3" }} /> WE
              OFFER FREE TIRES SERVICING
            </p>
            <p className="fw-bold text-secondary">
              <FontAwesomeIcon icon={faCheck} style={{ color: "#319ce3" }} />{" "}
              ENGINE OVERHAUL APPOINTMENTS
            </p>
            <button className="btn btn-brand mt-3">learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
