import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShowBookingList = ({ booking }) => {
  const { name, serviceName, servicePrice, status } = booking;
  // let statusColor;
  // switch (status) {
  //   case "pending":
  //     statusColor = "text-danger";
  //     break;
  //   case "ongoing":
  //     statusColor = "text-warning";
  //     break;
  //   case "done":
  //     statusColor = "text-success";
  //     break;
  // }
  return (
    <div className="col-md-4">
      <div className="card shadow p-2 bg-dark  mb-5 rounded text-center">
        <h4 className="card-text">
          User Name: <span className="my-2 card-brand">{name}</span>
        </h4>
        <h5 className="card-text">User Service: {serviceName}</h5>
        <p className="card-text">
          Service Price: <FontAwesomeIcon icon={faDollarSign} />
          {servicePrice}
        </p>
        {/* <p className={`${statusColor} border p-2`}>{status}</p> */}
      </div>
    </div>
  );
};

export default ShowBookingList;
