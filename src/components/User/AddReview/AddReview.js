import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import swal from "sweetalert";

const AddReview = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const handleBlur = (e) => {
    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[e.target.name] = e.target.value;
    setReviewInfo(newReviewInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
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
          swal({
            title: "Congratulations!",
            text: "Review Added Successfully!",
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
          <h5 className="sidebar-title">Add Review</h5>
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
                rows="5"
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
