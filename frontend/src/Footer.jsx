import React from 'react'
function Footer() {
  return (
    <footer className="bg-light mt-5 pt-5 pb-4">

      <div className="container">

        <div className="row">

          {/* Logo */}
          <div className="col-md-3">

            <img
              src="media/images/logo.svg"
              alt="Zerodha"
              style={{ width: "140px" }}
            />

            <p className="text-muted mt-3">
              © 2026 Zerodha Clone
            </p>

            <div className="fs-5">

              <i className="fa-brands fa-twitter me-3"></i>

              <i className="fa-brands fa-facebook me-3"></i>

              <i className="fa-brands fa-instagram me-3"></i>

              <i className="fa-brands fa-linkedin"></i>

            </div>

          </div>

          {/* Company */}
          <div className="col-md-3">

            <h5>Company</h5>

            <ul className="list-unstyled">

              <li><a href="#" className="text-decoration-none text-muted">About</a></li>

              <li><a href="#" className="text-decoration-none text-muted">Products</a></li>

              <li><a href="#" className="text-decoration-none text-muted">Pricing</a></li>

              <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>

            </ul>

          </div>

          {/* Support */}
          <div className="col-md-3">

            <h5>Support</h5>

            <ul className="list-unstyled">

              <li><a href="#" className="text-decoration-none text-muted">Help Center</a></li>

              <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>

              <li><a href="#" className="text-decoration-none text-muted">FAQs</a></li>

            </ul>

          </div>

          {/* Account */}
          <div className="col-md-3">

            <h5>Account</h5>

            <ul className="list-unstyled">

              <li><a href="#" className="text-decoration-none text-muted">Open Account</a></li>

              <li><a href="#" className="text-decoration-none text-muted">Login</a></li>

              <li><a href="#" className="text-decoration-none text-muted">Dashboard</a></li>

            </ul>

          </div>

        </div>

        <hr />

        <p className="text-center text-muted mb-0">
          Built with React, Bootstrap & Font Awesome.
        </p>

      </div>

    </footer>
  );
}
export default Footer;