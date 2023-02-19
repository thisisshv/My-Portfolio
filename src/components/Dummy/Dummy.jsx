import React from 'react'
import './Dummy.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Dummy() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
    <div className="dummy">
        <div className="dummy1">
            <span style={{color: darkMode? 'white': ''}}>Aim to work for all these</span>
            <span>Companies</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora,<br/>at odio vitae aperiam teneturaliquam molestiae numquam cumque recusandae<br/>dolores obcaecati vero deserunt laudantium, a quibusdam culpa non quisquam?</span>
            <button className="button d-button">Hire Me</button>
            <div className="d-blur"></div>
        </div>
        <div className="dummy2">
            <div className="mainCircle">
                <div className="secCircle">
                    <img src={Upwork} alt="Upwork Icon" />
                </div>
                <div className="secCircle">
                    <img src={Fiverr} alt="Fiverr Icon" />
                </div>
                <div className="secCircle">
                    <img src={Amazon} alt="Amazon Icon" />
                </div>
                <div className="secCircle">
                    <img src={Shopify} alt="Shopify Icon" />
                </div>
                <div className="secCircle">
                    <img src={Facebook} alt="Facebook Icon" />
                </div>
            </div>
            <div className="backCircle blueCircle"></div>
            <div className="backCircle yellowCircle"></div>
        </div>
    </div>
    )
}

export default Dummy
