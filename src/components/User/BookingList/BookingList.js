import React, { useEffect, useState } from "react";
import UserSidebar from "../UserSidebar/UserSidebar";
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
      <div className="row">
        <div className="col-md-3">
          <UserSidebar />
        </div>
        <div className="col-md-9">
          <div className="container">
            <h2 className="my-5 text-brand text-center">Booking List</h2>
            {bookings.map((booking) => (
              <ShowBookingList key={booking._id} booking={booking} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
