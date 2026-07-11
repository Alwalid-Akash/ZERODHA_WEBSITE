import React from 'react'
function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">

        <div className="col-4">
          <h1 className='mb-3'>Unbeatable Price</h1>
          <p>We pioneered the concept of discount brocking and price transarency.Flat fees no hidden charge.</p>
          <a href='' style={{ textDecoration: "none" }}>see pricing <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 ">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1 className='mb-3'>0</h1>
              <p>free equity delivery and<br></br> direct mutual funds</p>
            </div>
            <div className="col p-2 border">
              <h1 className='mb-3'>$20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;