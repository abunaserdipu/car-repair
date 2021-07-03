import React, { useEffect, useState } from "react";
import Sidebar from "../../User/Sidebar/Sidebar";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/orderList")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  const handleStateChange = (state, id) => {
    //    console.log(state, id)
    const stateInfo = { state };
    console.log(stateInfo);

    fetch(`https://intense-gorge-85136.herokuapp.com/updateState/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stateInfo),
    }).then((data) => {
      console.log(data);
      swal({
        title: "Congratulations!",
        text: "State Update Successfully!",
        icon: "success",
      });
    });
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <h5 className="sidebar-title">Order List</h5>
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
              <tr>
                <td>{order.name}</td>
                <td>{order.serviceName}</td>
                <td>
                  <FontAwesomeIcon icon={faDollarSign} />
                  {order.servicePrice}
                </td>
                <td>
                  <button
                    onClick={() => handleStateChange("pending", order._id)}
                    className="btn-sm btn-outline-danger ms-1"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleStateChange("ongoing", order._id)}
                    className="btn-sm btn-outline-warning ms-1"
                  >
                    On-going
                  </button>
                  <button
                    onClick={() => handleStateChange("done", order._id)}
                    className="btn-sm btn-outline-success ms-1"
                  >
                    Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orderList.length === 0 && (
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
      </div>
    </div>
  );
};

export default OrderList;
