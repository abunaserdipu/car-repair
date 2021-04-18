import React from "react";
import AddService from "../AddService/AddService";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
const Admin = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <h5 style={{ textAlign: "center", color: "blue" }}>Add Service</h5>
          <AddService />
        </div>
      </div>
    </div>
  );
};

export default Admin;
