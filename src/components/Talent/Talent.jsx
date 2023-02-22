import React from 'react'
import './Talent.css'
import Coding from '../../img/coding.png'
import WebDev from '../../img/web-dev.png'
import Tools from '../../img/tools.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Talent() {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="talent" id='Talent'>
            <div className="my-talents">
                <span style={{color: darkMode? 'white': ''}}>My</span>
                <span>Talents</span>
                <span className="line1" style={{color: darkMode? 'white': ''}}>I am well versed with languages like:</span>
                <span className="line2">Java, Python, HTML, CSS, JavaScript</span>
                <span className="line1" style={{color: darkMode? 'white': ''}}>Databases are important, so,</span>
                <span className="line2">MySQL, MongoDB</span>
                <span className="line1" style={{color: darkMode? 'white': ''}}>Talking about frameworks, I am familiar with</span>
                <span className="line2">ReactJS, NodeJS, Django</span>
                <span className="line1" style={{color: darkMode? 'white': ''}}>Tools?</span>
                <span className="line2">Git, JQuery, Canva</span>
                <span className="line1" style={{color: darkMode? 'white': ''}}>What also I am interested in?</span>
                <span className="line2">Ethical hacking !</span>
                <a href={Resume} download>
                    <button className="button t-button">Download Resume</button>
                </a>
                <div className="t-blur1"></div>
            </div>

            <div className="cards">
                <motion.div
                initial={{left: '74%'}}
                whileInView={{left: '58%'}}
                transition={transition}
                className="card1">
                    <Card
                    pic = {Coding}
                    heading = {'Coding'}
                    details = {'Java, Python, MySQL, JavaScript'}
                    />
                </motion.div>
                <motion.div
                initial={{left: '-6%'}}
                whileInView={{left: '14%'}}
                transition={transition}
                className="card2">
                    <Card
                    pic = {WebDev}
                    heading = {'Web Development'}
                    details = {'HTML, CSS, ReactJS, NodeJS'}
                    />
                </motion.div>
                <motion.div
                initial={{left: '80%'}}
                whileInView={{left: '70%'}}
                transition={transition}
                className="card3">
                    <Card
                    pic = {Tools}
                    heading = {'Tools'}
                    details = {'Git, JQuery, Canva'}
                    />
                </motion.div>
                <div className="t-blur2"></div>
            </div>
        </div>
    )
}

export default Talent
