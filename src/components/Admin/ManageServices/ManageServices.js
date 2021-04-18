import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
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
          <AdminSidebar />
        </div>

        <div className="col-md-9">
          <h5 style={{ textAlign: "center", color: "blue" }}>
            Manage Services
          </h5>
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
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
