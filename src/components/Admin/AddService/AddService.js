import React, { useState } from "react";
import Sidebar from "../../User/Sidebar/Sidebar";
import swal from "sweetalert";

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("price", info.price);
    formData.append("description", info.description);

    fetch("https://intense-gorge-85136.herokuapp.com/addAService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          swal({
            title: "Congratulations!",
            text: "You added service successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h5 className="sidebar-title">Add Service</h5>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <input
                onBlur={handleBlur}
                className="form-control"
                type="name"
                name="name"
                placeholder="Name"
                required
              />
              <br />
              <input
                onBlur={handleBlur}
                className="form-control"
                type="number"
                name="price"
                placeholder="price"
                required
              />
              <br />
              <textarea
                className="form-control"
                type="text"
                name="description"
                id=""
                cols="30"
                rows="5"
                onBlur={handleBlur}
                placeholder="Description"
                required
              ></textarea>
              <br />
              <input
                onChange={handleFileChange}
                className="form-control"
                type="file"
                name="file"
                required
              />
              <br />

              <input className="btn btn-brand" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
