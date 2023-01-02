import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header>
        <div className="logo-mine">
            <a href="/">HKRY</a>
        </div>
        <nav>
            <NavLink to="/" className={({isActive}) => isActive && "active"}>Home</NavLink>
            <NavLink to="/signup" className={({isActive}) => isActive && "active"}>Signup</NavLink>
            <NavLink to="/cart" className={({isActive}) => isActive ? "active cart" : "cart"}>
                <i className="fas fa-shopping-cart"></i>
            </NavLink>
        </nav>
    </header>
  )
}

export default Header