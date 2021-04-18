import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import UserSidebar from "../UserSidebar/UserSidebar";
const Checkout = () => {
  const { serviceId } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [services, setServices] = useState([]);
  const serviceInfo = {
    name: loggedInUser.name,
    email: loggedInUser.email,
    serviceName: services.name,
    servicePrice: services.price,
  };
  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/service/" + serviceId)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <UserSidebar />
        </div>
        <div className="col-md-8">
          <div className="container">
            <form action="">
              <input
                type="text"
                name="name"
                className="form-control"
                value={loggedInUser.name}
              />
              <br />
              <input
                type="email"
                name="email"
                className="form-control"
                value={loggedInUser.email}
              />
              <br />
              <input type="text" name="service-name" value={services.name} />
              <br />
              <input
                type="number"
                name="service-price"
                value={services.price}
              />
            </form>
            <br />
            <h5>Pay With Stripe</h5>
            <br />
            <ProcessPayment serviceInfo={serviceInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
