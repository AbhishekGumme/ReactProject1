import React from 'react'

const Navigation = () => {
  return (
    <nav className='container'>
      <div className=''>
      <img src="/images/Nikelogo.png" alt="logo" width={100}/>
      </div>
      <ul>
        <li href='#'>Menu</li>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
        
      </ul>
      <button>login</button>
    </nav>
  )
}

export default Navigation