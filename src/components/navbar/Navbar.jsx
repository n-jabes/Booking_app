import "./navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">JabesDev</span>
            <div className="navItems">
                <button className="navButtons">Register</button>
                <button className="navButtons">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar