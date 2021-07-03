import React from "react";

const Review = ({ review }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card shadow p-2 bg-dark mb-5 rounded text-center">
        <h3 className="my-2 text-brand fw-bold">{review.name}</h3>
        <h5 className="my-1" style={{color: "#319ce3"}}>{review.designation}</h5>
        <p className="text-secondary">{review.description}</p>
      </div>
    </div>
  );
};

export default Review;
