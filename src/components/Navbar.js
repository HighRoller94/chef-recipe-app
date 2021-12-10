import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav">
            <div className="navbar">
                <Link to="/">
                    <h2 className="nav__logo">CHEF</h2>
                </Link>
                <div className="nav__links">
                    <span className="nav__link">cuisine</span>
                    <span className="nav__link">diet</span>
                    <span className="nav__link">login</span>
                    <button className="nav__signup">signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
