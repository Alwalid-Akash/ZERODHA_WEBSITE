import React from 'react'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <a className="navbar-brand" href="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha"
            style={{ width: "130px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Signup</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Products</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Pricing</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Support</a>
            </li>

            <li className="nav-item ms-3">
              <a className="nav-link">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;