import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const items = [
    { label: "Dashboard", to: "/" },
    { label: "Orders", to: "/orders" },
    { label: "Holdings", to: "/holdings" },
    { label: "Positions", to: "/positions" },
    { label: "Funds", to: "/funds" },
    { label: "Apps", to: "/apps" },
  ];

  return (
    <div
      className="d-flex align-items-center justify-content-between px-3 py-2"
      style={{ flexBasis: "68%", height: "100%" }}
    >
      <img src="/logo.png" alt="logo" style={{ width: "40px" }} />

      <ul className="nav align-items-center mb-0">
        {items.map((item, index) => (
          <li className="nav-item" key={item.label}>
            <Link
              to={item.to}
              onClick={() => handleMenuClick(index)}
              className={
                "nav-link px-3 small " +
                (selectedMenu === index ? "text-danger fw-semibold" : "text-secondary")
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="vr mx-3 d-none d-md-block" style={{ height: "30px" }}></div>

      <div
        className="d-flex align-items-center gap-2 position-relative"
        role="button"
        onClick={handleProfileClick}
      >
        <div
          className="rounded-circle d-flex align-items-center justify-content-center fw-medium"
          style={{
            width: "32px",
            height: "32px",
            background: "#fce5fc",
            color: "#dd8bdd",
            fontSize: "0.75rem",
          }}
        >
          ZU
        </div>
        <span className="small text-secondary">USERID</span>

        {isProfileDropdownOpen && (
          <div
            className="position-absolute bg-white shadow rounded p-2"
            style={{ top: "100%", right: 0, minWidth: "160px", zIndex: 200 }}
          >
            <p className="small text-muted mb-1 px-2">Signed in as USERID</p>
            <hr className="my-1" />
            <button className="btn btn-sm btn-light w-100 text-start">Profile</button>
            <button className="btn btn-sm btn-light w-100 text-start">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
