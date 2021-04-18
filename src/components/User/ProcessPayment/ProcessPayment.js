import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51Ie9ZCFzij6gLK3eoHphllpoL4DdmvU4OpQLOaW36LbLEhmyeHhEAR3k2ZQ6vyIIiekh8P2UCzVWDIYuaK4PDaPB00f98583GN"
);

const ProcessPayment = ({ serviceInfo }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm serviceInfo={serviceInfo}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
