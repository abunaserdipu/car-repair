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
        <h2 className="my-5 text-brand text-center">Testimonials</h2>
        <div className="row">
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
