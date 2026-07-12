import React from "react";


function CreateTicket() {


  return (

    <div className="container my-5">


      <h3>
        Create a ticket
      </h3>



      <form>


        <input
          className="form-control mb-3"
          placeholder="Email"
        />



        <input
          className="form-control mb-3"
          placeholder="Subject"
        />



        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Describe your problem"
        />



        <button className="btn btn-primary">
          Submit Ticket
        </button>


      </form>



    </div>


  )


}


export default CreateTicket;