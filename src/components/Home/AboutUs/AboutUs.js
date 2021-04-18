import React from "react";
import whoWe from "../../../images/whoWe.jpg";
import whatWeCan from "../../../images/whatWeCan.jpg";
import ourMechanics from "../../../images/mechanics.jpg";

const AboutUs = () => {
  return (
    <section>
      <div className="container my-5">
        <h2 className="my-5 text-brand text-center">About Us</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow p-2  mb-5 bg-body rounded">
              <img style={{ width: "100%" }} src={whoWe} alt="" />
              <h3 className="my-2 text-brand">Who We Are?</h3>
              <p className="my-3 text-secondary fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla eaque dolores ullam
              </p>
              <p className="text-secondary">
                {" "}
                Optio hic veniam, praesentium deleniti totam debitis soluta rem
                architecto dignissimos recusandae officiis alias perspiciatis ex
                porro enim neque aliquam sequi unde voluptatibus illum
                aspernatur beatae non.
              </p>
              <button className="btn btn-brand">explore</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-2  mb-5 bg-body rounded">
              <img style={{ width: "100%" }} src={whatWeCan} alt="" />
              <h3 className="my-2 text-brand">WHAT WE CAN DO?</h3>
              <p className="my-3 text-secondary fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla eaque dolores ullam
              </p>
              <p className="text-secondary">
                {" "}
                Optio hic veniam, praesentium deleniti totam debitis soluta rem
                architecto dignissimos recusandae officiis alias perspiciatis ex
                porro enim neque aliquam sequi unde voluptatibus illum
                aspernatur beatae non.
              </p>
              <button className="btn btn-brand">explore</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-2  mb-5 bg-body rounded">
              <img style={{ width: "100%" }} src={ourMechanics} alt="" />
              <h3 className="my-2 text-brand">Our mechanics</h3>
              <p className="my-3 text-secondary fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla eaque dolores ullam
              </p>
              <p className="text-secondary">
                {" "}
                Optio hic veniam, praesentium deleniti totam debitis soluta rem
                architecto dignissimos recusandae officiis alias perspiciatis ex
                porro enim neque aliquam sequi unde voluptatibus illum
                aspernatur beatae non.
              </p>
              <button className="btn btn-brand">explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
