import React from 'react'

import Logo from '../../assets/logo-focusify.png'

const Navbar = () => {
  return (
    <nav className="sticky top-8 z-50 bg-primary-10 mx-8 mt-8 px-4 py-2 flex justify-between items-center rounded-2xl">
      {/* Logo */}
      <div className="space-x-2">
        <img src={Logo} alt="Focusify Logo" className="h-20 w-20 inline-block" />
        <span className="text-white text-lg font-semibold">Focusify</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <a href="/about" className="text-white hover:text-primary-20">About</a>
        <a href="/features" className="text-white hover:text-primary-20">Features</a>
        <a href="/contact" className="text-white hover:text-primary-20">Contact</a>
      </div>

      {/* Button */}
      <div>
        <a href="/signup" className="bg-primary-20 text-white px-4 py-2 rounded hover:bg-primary-30">
          Sign Up
        </a>
      </div>
    </nav>
  )
}

export default Navbar