import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../User/Sidebar/Sidebar";
import AddService from "../AddService/AddService";
import BookingList from "../../User/BookingList/BookingList";

const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://intense-gorge-85136.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAdmin(data);
        }
      });
  }, [loggedInUser.email]);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
      {!isAdmin && (
        <>
          <BookingList />
        </>
      )}
      {isAdmin && (
        <>
          <AddService />
        </>
      )}
    </div>
  );
};

export default Admin;
