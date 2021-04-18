import React from "react";

const Review = ({ review }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card shadow p-2 bg-body  mb-5 rounded text-center">
        <h3 className="my-2 text-brand">{review.name}</h3>
        <h5>{review.designation}</h5>
        <p className="text-secondary">{review.description}</p>
      </div>
    </div>
  );
};

export default Review;
