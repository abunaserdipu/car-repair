import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShowBookingList = ({ booking }) => {
  return (
    <div className="col-md-3">
      <div className="card shadow p-2 bg-body  mb-5 rounded text-center">
        <h4>
          User Name: <span className="my-2 text-brand">{booking.name}</span>
        </h4>
        <h5>User Service: {booking.serviceName}</h5>
        <p>
          Service Price: <FontAwesomeIcon icon={faDollarSign} />
          {booking.servicePrice}
        </p>
      </div>
    </div>
  );
};

export default ShowBookingList;
