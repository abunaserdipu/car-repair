import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <div className="container my-5">
        <h2 className="my-5 text-title">Testimonials</h2>
        <div className="row">
          {reviews.length === 0 && (
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
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
