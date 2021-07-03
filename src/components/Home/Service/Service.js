import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  const history = useHistory();
  const handleService = (service) => {
    history.push(`checkout/${service}`);
  };
  return (
    <section className="col-md-4 col-sm-6">
      <div className="card service-card shadow p-2  mb-5 bg-body rounded">
        {service.image ? (
          <img
            style={{ width: "100%" }}
            className="img-fluid mb-3"
            src={`data:image/png;base64,${service.image.img}`}
            alt=""
          />
        ) : (
          <img
            style={{ width: "100%" }}
            className="img-fluid mb-3"
            src={`https://intense-gorge-85136.herokuapp.com//${service.img}`}
            alt=""
          />
        )}

        <h3 className="my-2 text-brand">{service.name}</h3>
        <h5>
          {" "}
          <FontAwesomeIcon className="text-brand" icon={faDollarSign} />
          {service.price}
        </h5>
        <p className="text-secondary">{service.description}</p>
        <button
          onClick={() => handleService(service._id)}
          className="btn btn-brand"
        >
          take service
        </button>
      </div>
    </section>
  );
};

export default Service;
