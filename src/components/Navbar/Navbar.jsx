import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Navbar() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
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
                        <li style={{color: darkMode? 'white': ''}}>Home</li>
                    </Link>
                    <Link spy={true} to='Talent' smooth={true}>
                        <li style={{color: darkMode? 'white': ''}}>Talent</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                        <li style={{color: darkMode? 'white': ''}}>Experience</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true}>
                        <li style={{color: darkMode? 'white': ''}}>Projects</li>
                    </Link>
                    <Link spy={true} to='Achievements' smooth={true}>
                        <li style={{color: darkMode? 'white': ''}}>Achievements</li>
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
