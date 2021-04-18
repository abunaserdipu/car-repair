import {
  faDollarSign,
  faLocationArrow,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ShowOrderList = ({ order }) => {
  return (
    <tr>
      <td>{order.name}</td>
      <td>{order.serviceName}</td>
      <td>
        <FontAwesomeIcon icon={faDollarSign} />
        {order.servicePrice}
      </td>
      <td>Pending</td>
    </tr>
  );
};

export default ShowOrderList;
