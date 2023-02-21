import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

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
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Talent' smooth={true}>
                        <li>Talent</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true}>
                        <li>Projects</li>
                    </Link>
                    <Link spy={true} to='Achievements' smooth={true}>
                        <li>Achievements</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
                <button className="button n-button">
                    Contact Me
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
