import React from "react";
import quickFix from "../../../images/quickFix.jpg";
import smoothRide from "../../../images/smoothRide.jpg";
import bestSupport from "../../../images/bestSupport.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <section>
      <div className="container my-5">
        <h2 className="text-title my-5">Our Blogs</h2>
        <div className="row">
          <div className="col-md-4 mb-5 mb-5 blog">
            <img style={{ width: "100%" }} src={quickFix} alt="" />
            <h4 className="text-brand my-3">Quick Fix</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              dolorum voluptatibus? Tempore non doloribus, rem vitae quos ex,
              corporis, unde quibusdam dolor ad at vel! Ipsa exercitationem
              dignissimos debitis nisi?
            </p>
          </div>
          <div className="col-md-4 mb-5 blog">
            <img style={{ width: "100%" }} src={smoothRide} alt="" />
            <h4 className="text-brand my-3">smooth ride</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              dolorum voluptatibus? Tempore non doloribus, rem vitae quos ex,
              corporis, unde quibusdam dolor ad at vel! Ipsa exercitationem
              dignissimos debitis nisi?
            </p>
          </div>
          <div className="col-md-4 mb-5 blog">
            <img style={{ width: "100%" }} src={bestSupport} alt="" />
            <h4 className="text-brand my-3">best support</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              dolorum voluptatibus? Tempore non doloribus, rem vitae quos ex,
              corporis, unde quibusdam dolor ad at vel! Ipsa exercitationem
              dignissimos debitis nisi?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
