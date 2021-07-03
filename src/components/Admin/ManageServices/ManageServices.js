import React, { useEffect, useState } from "react";
import Sidebar from "../../User/Sidebar/Sidebar";
import ShowService from "./ShowService";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/manageServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <h5 className="sidebar-title">Manage Services</h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <ShowService service={service} />
              ))}
            </tbody>
          </table>
          {services.length === 0 && (
            <div className="d-flex justify-content-center">
              <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
