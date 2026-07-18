import React from "react";

function Hero() {
  return (
    <section id="supportHero">

      {/* Header */}
      <div className="container-fluid bg-primary text-white">
        <div className="container py-5">

          <div className="d-flex justify-content-between align-items-center">

            <h4 className="mb-0">
              Support Portal
            </h4>

            <a
              href="/tickets"
              className="text-white text-decoration-none"
            >
              Track Tickets
            </a>

          </div>


          <div className="row mt-5 align-items-center">

            {/* Search Section */}
            <div className="col-md-7">

              <h1 className="fs-3 mb-4">
                Search for an answer or browse help topics to create a ticket
              </h1>


              <div className="input-group mb-4">

                <input
                  className="form-control form-control-lg"
                  placeholder="Eg. How do I activate F&O?"
                />

                <button className="btn btn-dark">
                  Search
                </button>

              </div>


              <div className="d-flex flex-wrap gap-3">

                <a href="" className="text-white">
                  Track account opening
                </a>

                <a href="" className="text-white">
                  Track segment activation
                </a>

                <a href="" className="text-white">
                  Intraday margins
                </a>

                <a href="" className="text-white">
                  Kite user manual
                </a>

              </div>


            </div>



            {/* Featured */}
            <div className="col-md-5 mt-4 mt-md-0">

              <div className="card shadow-sm border-0">

                <div className="card-body">

                  <h3 className="fs-4 mb-3">
                    Featured
                  </h3>


                  <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                      <a href="">
                        Current Takeovers and Delisting - January 2024
                      </a>
                    </li>


                    <li className="list-group-item">
                      <a href="">
                        Latest Intraday leverages - MIS & CO
                      </a>
                    </li>


                  </ul>


                </div>

              </div>


            </div>


          </div>

        </div>
      </div>


    </section>
  );
}

export default Hero;