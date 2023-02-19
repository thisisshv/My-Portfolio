import React from 'react'
import './Talent.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Talent() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="talent">
            <div className="my-talents">
                <span style={{color: darkMode? 'white': ''}}>My</span>
                <span>Talents</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora,<br/>at odio vitae aperiam teneturaliquam molestiae numquam cumque recusandae<br/>dolores obcaecati vero deserunt laudantium, a quibusdam culpa non quisquam?</span>
                <a href={Resume} download>
                    <button className="button t-button">Download Resume</button>
                </a>
                <div className="t-blur1"></div>
            </div>

            <div className="cards">
                <div className="card1">
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Coding'}
                    details = {'Java, Python'}
                    />
                </div>
                <div className="card2">
                    <Card
                    emoji = {Glasses}
                    heading = {'Development'}
                    details = {'HTML, CSS, JavaScript'}
                    />
                </div>
                <div className="card3">
                    <Card
                    emoji = {Humble}
                    heading = {'Tools & Frameworks'}
                    details = {'ReactJS, SQL, Git'}
                    />
                </div>
                <div className="t-blur2"></div>
            </div>
        </div>
    )
}

export default Talent
