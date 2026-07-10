import React from "react";

function Stats() {
  return (
    <div className="container my-5 py-5">

      <div className="row align-items-stretch g-5">

        {/* Left Written Section */}
        <div className="col-md-6">
          <div
            className="p-5 h-100 d-flex flex-column justify-content-center"
            style={{ minHeight: "400px" }}
          >

            <h2 className="fw-bold mb-4">
              Empowering millions of investors worldwide
            </h2>

            <p className="text-muted mb-4">
              Our platform makes investing simple, transparent, and accessible.
              From beginners to experienced traders, millions of users trust us
              to manage their financial journey with confidence.
            </p>

            <div className="row">

              <div className="col-6 mb-3">
                <h3 className="fw-bold">$1.5M+</h3>
                <p className="text-muted">Active Investors</p>
              </div>

              <div className="col-6 mb-3">
                <h3 className="fw-bold">10+</h3>
                <p className="text-muted">Years Experience</p>
              </div>

              <div className="col-6">
                <h3 className="fw-bold">$4.5B+</h3>
                <p className="text-muted">Assets Managed</p>
              </div>

              <div className="col-6">
                <h3 className="fw-bold">20+</h3>
                <p className="text-muted">Awards Won</p>
              </div>

            </div>

          </div>
        </div>


        {/* Right Image Section */}
        <div className="col-md-6">
          <div
            className="p-5 h-100 d-flex align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >

            <img
              src="media/images/ecosystem.png"
              className="img-fluid"
              style={{
                width: "80%"

              }}

            />

          </div>
        </div>


      </div>

    </div>
  );
}

export default Stats;