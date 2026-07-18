import React from "react";

const Funds = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end mb-4">
        <p className="small text-muted mb-0 me-3">
          Instant, zero-cost fund transfers with UPI
        </p>
        <button className="btn btn-success btn-sm me-1">Add funds</button>
        <button className="btn btn-primary btn-sm">Withdraw</button>
      </div>

      <div className="row">
        <div className="col-md-8">
          <p className="mb-2">Equity</p>

          <div className="border p-3">
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available margin</p>
              <p className="fs-4 text-primary mb-0">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Used margin</p>
              <p className="fs-4 mb-0">3,757.30</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Available cash</p>
              <p className="fs-4 mb-0">4,043.10</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Opening Balance</p>
              <p className="mb-0">4,043.10</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Closing Balance</p>
              <p className="mb-0">3736.40</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Payin</p>
              <p className="mb-0">4064.00</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">SPAN</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Delivery margin</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Exposure</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Options premium</p>
              <p className="mb-0">0.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Collateral (Liquid funds)</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">Collateral (Equity)</p>
              <p className="mb-0">0.00</p>
            </div>
            <div className="d-flex justify-content-between mb-0">
              <p className="text-muted mb-0">Total Collateral</p>
              <p className="mb-0">0.00</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border p-4 text-center">
            <p className="text-muted mb-2">You don't have a commodity account</p>
            <button className="btn btn-primary btn-sm">Open Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
