import React, { useState } from "react";
import AdminSidebar from "../../Admin/AdminSidebar/AdminSidebar";

const AddReview = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const handleBlur = (e) => {
    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[e.target.name] = e.target.value;
    setReviewInfo(newReviewInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", reviewInfo.name);
    formData.append("designation", reviewInfo.designation);
    formData.append("description", reviewInfo.description);
    fetch("https://intense-gorge-85136.herokuapp.com/addAReview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Service added successfully!");
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
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <h5 style={{ textAlign: "center", color: "blue" }}>Add Review</h5>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                onBlur={handleBlur}
                type="name"
                name="name"
                placeholder="Your Name"
              />
              <br />
              <input
                className="form-control"
                onBlur={handleBlur}
                type="text"
                name="designation"
                placeholder="Your Designation"
              />
              <br />
              <textarea
                className="form-control"
                onBlur={handleBlur}
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Opinion"
              ></textarea>
              <br />
              <input className="btn btn-brand" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
