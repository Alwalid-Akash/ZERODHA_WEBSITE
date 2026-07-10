import React from 'react'

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' className='mb-5'></img>
        <h1 className='mt-5'>Invest in Everything</h1>
        <p>Online platfrom to invest in stock,derivatives,mutual funds and more</p>
        <button className="p-3 btn btn-primary" style={{ width: "20%", margin: "0 auto" }}>Signup</button>

      </div>

    </div>
  );
}

export default Hero;