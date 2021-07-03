import React, { useState } from "react";
import Sidebar from "../../User/Sidebar/Sidebar";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const handleBlur = (e) => {
    setAdmin(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch("https://intense-gorge-85136.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: admin }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          swal({
            title: "Congratulations!",
            text: "New Admin Added successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h5 className="sidebar-title">Add New Admin</h5>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              onBlur={handleBlur}
              className="form-control"
              type="email"
              name="email"
              placeholder="joh@gmail.com"
            />
            <br />
            <input className="btn btn-brand" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
