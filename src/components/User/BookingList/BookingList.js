import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ShowBookingList from "./ShowBookingList";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <div className="row p-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="container">
            <h2 className="sidebar-title">Booking List</h2>
            <div className="row">
              {bookings.map((booking) => (
                <ShowBookingList key={booking._id} booking={booking} />
              ))}
            </div>
            {bookings.length === 0 && (
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
      </div>
    </div>
  );
};

export default BookingList;
