import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Shivanshu</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Talent</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Achievements</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default Navbar
