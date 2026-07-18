import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div
      className="d-flex align-items-center border-bottom bg-white shadow-sm"
      style={{ height: "10vh" }}
    >
      <div
        className="d-flex align-items-center justify-content-around border-end px-3"
        style={{ flexBasis: "32%", height: "100%" }}
      >
        <div className="d-flex align-items-center gap-2" style={{ flexBasis: "40%" }}>
          <span className="small fw-bold text-uppercase text-secondary text-nowrap">
            NIFTY 50
          </span>
          <span className="small fw-bold text-danger">{100.2}</span>
          <span className="small text-muted"></span>
        </div>
        <div className="d-flex align-items-center gap-2" style={{ flexBasis: "40%" }}>
          <span className="small fw-bold text-uppercase text-secondary text-nowrap">
            SENSEX
          </span>
          <span className="small fw-bold text-danger">{100.2}</span>
          <span className="small text-muted"></span>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
