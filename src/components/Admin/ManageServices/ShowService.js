import {
  faDollarSign,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShowService = ({ service }) => {
  const deleteService = (id) => {
    console.log(id);
    fetch(`https://intense-gorge-85136.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Product deleted successfully!");
        }
      });
  };
  return (
    <tr>
      <td>{service.name}</td>
      <td>
        <FontAwesomeIcon icon={faDollarSign} />
        {service.price}
      </td>
      <td>
        <button
          onClick={() => deleteService(service._id)}
          className="btn btn-danger btn-sm"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default ShowService;
