import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import MyPhoto from '../../img/my-photo.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesemoji from '../../img/glassesemoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Intro() {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}}>Hi, I Am</span>
            <span>Shivanshu Kumar</span>
            <span>About me Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nemo itaque ab beatae? Saepe, nesciunt! Expedita provident laborum quaerat eum accusamus cumque in, nihil, iusto id, nulla velit unde doloribus.</span>
        </div>

        <button className="button i-button">Hire Me</button>

        <div className="i-icons">
            <a href="https://github.com/thisisshv">
                <img src={Github} alt="Github Icon"/>
            </a>
            <img src={LinkedIn} alt="LinkedIn Icon"/>
            <img src={Instagram} alt="Instagram Icon"/>
        </div>

      </div>
      <div className="i-right">
        <img src={Vector1} alt="Graphics"/>
        <img src={Vector2} alt="Graphics"/>
        <img src={MyPhoto} alt=""/>
        <motion.img
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
        src={Glassesemoji} alt=""/>
        <motion.div
        initial={{top: '4%', left: '74%'}}
        whileInView={{left: '68%'}}
        transition={transition}
        className='fd1'>
            <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
        </motion.div>
        <motion.div
        initial={{left: '9rem'}}
        whileInView={{left: '0rem'}}
        transition={transition}
        className='fd2'>
            <FloatingDiv image={Thumbup} text1='Best' text2='Design'/>
        </motion.div>
        {/* Blur Divs */}
        <div className="blur1"></div>
        <div className="blur2"></div>
      </div>
    </div>
  )
}

export default Intro
