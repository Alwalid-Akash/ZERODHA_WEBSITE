import React from "react";

const Funds = () => {
  return (
    <>
      {/* Top Actions */}
      <div className="d-flex align-items-center justify-content-end mb-4">

        <p className="small text-muted mb-0 me-3">
          Instant, zero-cost fund transfers with UPI
        </p>

        <button className="btn btn-success btn-sm me-2">
          Add funds
        </button>

        <button className="btn btn-primary btn-sm">
          Withdraw
        </button>

      </div>


      <div className="row align-items-stretch">


        {/* Equity Section */}
        <div className="col-md-8">

          <h6 className="mb-3">
            Equity
          </h6>


          <div className="border rounded p-4 shadow-sm">


            <div className="d-flex justify-content-between mb-3">

              <p className="text-muted mb-0">
                Available margin
              </p>

              <h5 className="text-primary mb-0">
                4,043.10
              </h5>

            </div>



            <div className="d-flex justify-content-between mb-3">

              <p className="text-muted mb-0">
                Used margin
              </p>

              <h5 className="mb-0">
                3,757.30
              </h5>

            </div>



            <div className="d-flex justify-content-between mb-3">

              <p className="text-muted mb-0">
                Available cash
              </p>

              <h5 className="mb-0">
                4,043.10
              </h5>

            </div>



            <hr />


            {[
              ["Opening Balance", "4,043.10"],
              ["Closing Balance", "3,736.40"],
              ["Payin", "4,064.00"],
              ["SPAN", "0.00"],
              ["Delivery margin", "0.00"],
              ["Exposure", "0.00"],
              ["Options premium", "0.00"],
            ].map((item, index) => (

              <div
                className="d-flex justify-content-between mb-3"
                key={index}
              >

                <p className="text-muted mb-0">
                  {item[0]}
                </p>

                <p className="mb-0">
                  {item[1]}
                </p>

              </div>

            ))}



            <hr />


            {[
              ["Collateral (Liquid funds)", "0.00"],
              ["Collateral (Equity)", "0.00"],
              ["Total Collateral", "0.00"],
            ].map((item, index) => (

              <div
                className="d-flex justify-content-between mb-3"
                key={index}
              >

                <p className="text-muted mb-0">
                  {item[0]}
                </p>

                <p className="mb-0">
                  {item[1]}
                </p>

              </div>

            ))}


          </div>

        </div>




        {/* Commodity Account */}
        <div className="col-md-4 d-flex align-items-center">

          <div
            className="border rounded shadow-sm p-5 text-center w-100"
          >

            <p className="text-muted mb-4">
              You don't have a commodity account
            </p>


            <button className="btn btn-primary btn-sm">
              Open Account
            </button>


          </div>

        </div>


      </div>

    </>
  );
};


export default Funds;