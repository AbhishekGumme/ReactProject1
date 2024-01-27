import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DEAERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES</p>
        <div className='hero-btn'>
          <button className=''>Shop Now</button>
          <button className='secoundary-btn'>Catogery</button>
        </div>
        <div className='shoping'>
          <p>Avilable on</p>
          <div className='brand-icons'>
            <img src="/images/amazon-logo.png" alt="amazon-logo" width={100}/>
          </div>
        </div>
      </div>
      <div className='hero-image'>
        <img src="/images/shoes.jpg" alt="hero-image" width={500}height={500}/>
      </div>

    </main>
  )
}

export default Hero