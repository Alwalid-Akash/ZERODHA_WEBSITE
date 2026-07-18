import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <i
        className="bi bi-journal-text text-secondary mb-3"
        style={{ fontSize: "3rem" }}
      ></i>
      <p className="text-secondary mb-3">You haven't placed any orders today</p>

      <Link to={"/"} className="btn btn-primary btn-sm">
        Get started
      </Link>
    </div>
  );
};

export default Orders;
