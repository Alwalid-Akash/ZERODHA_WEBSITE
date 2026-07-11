import React from "react";


function LeftSection({ title, description, image }) {


  return (

    <div className="row align-items-center my-5">


      <div className="col-md-6">

        <img
          src={image}
          className="img-fluid"
        />

      </div>



      <div className="col-md-6">

        <h2>
          {title}
        </h2>


        <p className="text-muted">
          {description}
        </p>


        <a href="#" className="text-decoration-none">
          Learn more →
        </a>


      </div>


    </div>

  )


}


export default LeftSection;