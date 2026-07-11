import React from "react";


function Brokerage() {

  return (

    <div className="container my-5">


      <div className="row g-4">


        <div className="col-md-4">


          <div className="card p-4 text-center h-100">

            <h3>
              Equity
            </h3>

            <h1>
              ₹0
            </h1>

            <p className="text-muted">
              Free delivery investments
            </p>

          </div>


        </div>



        <div className="col-md-4">


          <div className="card p-4 text-center h-100">

            <h3>
              Intraday
            </h3>

            <h1>
              ₹20
            </h1>

            <p className="text-muted">
              Per executed order
            </p>

          </div>


        </div>




        <div className="col-md-4">


          <div className="card p-4 text-center h-100">

            <h3>
              Mutual Funds
            </h3>

            <h1>
              ₹0
            </h1>

            <p className="text-muted">
              Direct mutual funds
            </p>


          </div>


        </div>


      </div>


    </div>

  )

}


export default Brokerage;