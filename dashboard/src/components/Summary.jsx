import React from "react";

const Summary = () => {
  return (
    <>
      <div className="mb-4">
        <h5 className="fw-normal text-secondary mb-3">Hi, User!</h5>
        <hr />
      </div>

      <div className="mb-4">
        <p className="mb-3">Equity</p>

        <div className="d-flex align-items-center">
          <div className="flex-fill">
            <h3 className="fw-light text-secondary mb-1">3.74k</h3>
            <p className="small text-muted mb-0">Margin available</p>
          </div>
          <div className="vr mx-4" style={{ height: "70px" }}></div>
          <div className="flex-fill">
            <p className="small text-muted mb-2">
              Margins used <span className="text-dark ms-2">0</span>
            </p>
            <p className="small text-muted mb-0">
              Opening balance <span className="text-dark ms-2">3.74k</span>
            </p>
          </div>
        </div>
        <hr className="mt-4" />
      </div>

      <div className="mb-4">
        <p className="mb-3">Holdings (13)</p>

        <div className="d-flex align-items-center">
          <div className="flex-fill">
            <h3 className="fw-light text-success mb-1">
              1.55k <small className="fs-6">+5.20%</small>
            </h3>
            <p className="small text-muted mb-0">P&amp;L</p>
          </div>
          <div className="vr mx-4" style={{ height: "70px" }}></div>
          <div className="flex-fill">
            <p className="small text-muted mb-2">
              Current Value <span className="text-dark ms-2">31.43k</span>
            </p>
            <p className="small text-muted mb-0">
              Investment <span className="text-dark ms-2">29.88k</span>
            </p>
          </div>
        </div>
        <hr className="mt-4" />
      </div>
    </>
  );
};

export default Summary;
