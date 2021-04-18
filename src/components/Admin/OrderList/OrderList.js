import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import ShowOrderList from "./ShowOrderList";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/orderList")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-3">
        <AdminSidebar />
      </div>
      <div className="col-md-9">
        <h5 style={{ textAlign: "center", color: "blue" }}>Order List</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Service Name</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <ShowOrderList order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
