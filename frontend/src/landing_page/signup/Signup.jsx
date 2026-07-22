import React from "react";


function Signup() {


  return (

    <div className="container my-5 py-5">


      <div className="row align-items-center">


        <div className="col-md-6">


          <img
            src="/media/images/signup.png"
            className="img-fluid"
          />


        </div>



        <div className="col-md-6">


          <h2>
            Open your account
          </h2>


          <p className="text-muted">
            Start investing in stocks, mutual funds and more.
          </p>



          <input
            className="form-control mb-3"
            placeholder="Phone number"
          />



          <button className="btn btn-primary px-5">
            Continue
          </button>



        </div>


      </div>


    </div>


  )


}


export default Signup;