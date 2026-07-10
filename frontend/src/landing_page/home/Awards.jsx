import React from 'react'

function Awards() {
  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-5 pe-5">
            <img
              src='media/images/largestBroker.svg'
              className="img-fluid"
              style={{ width: "90%" }}
              alt="Largest Broker"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-7 ps-5">

            <h2>LARGEST STOCK BROCKER</h2>

            <p className="text-muted">
              We have millions of clients all over the world. You can try it,
              and we will help you with our utmost efficiency.
            </p>

            <div className="row mt-5">
              <div className="col-6">
                <ul>
                  <li>Feature and Options</li>
                  <li>Feature and Options</li>
                  <li>Feature and Options</li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li>Feature and Options</li>
                  <li>Feature and Options</li>
                  <li>Feature and Options</li>
                </ul>
              </div>
            </div>

            <img
              src='media/images/pressLogos.png'
              className="img-fluid mt-3"
              style={{ width: "705%" }}
              alt="Press Logos"
            />

          </div>

        </div>
      </div>
    </>
  );
}

export default Awards;