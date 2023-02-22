import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import MyPhoto from '../../img/my-photo.png'
import Web from '../../img/web.png'
import Coder from '../../img/coder.png'
import Glassesemoji from '../../img/glassesemoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

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
            <span>I am a fresher who just graduated with Bachelor of Engineering from Sir M. Visvesvaraya Institute of Technology.
              <br />I am a skilled frontend developer specialized in ReactJS.
              <br />Want to know about me more? Go through my website.
            </span>
        </div>

        <Link spy={true} to='Contact' smooth={true} className="i-button">
          <button className="button">Hire Me</button>
        </Link>

        <div className="i-icons">
          <a href="https://www.linkedin.com/in/shivanshu-kumar-a0b5bb209/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn Icon"/>
          </a>
          <a href="https://github.com/thisisshv" target="_blank">
            <img src={Github} alt="Github Icon"/>
          </a>
          <a href="https://instagram.com/thisisshivanshu?igshid=YmJhNjkzNzY=" target="_blank">
            <img src={Instagram} alt="Instagram Icon"/>
          </a>
        </div>

      </div>
      <div className="i-right">
        <img src={Vector1} alt="Graphics"/>
        <img src={Vector2} alt="Graphics"/>
        <img src={MyPhoto} alt="" className="my-photo"/>
        <motion.img
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
        className='glasses'
        src={Glassesemoji} alt=""/>
        <motion.div
        initial={{top: '4%', left: '74%'}}
        whileInView={{left: '68%'}}
        transition={transition}
        className='fd1'>
          <FloatingDiv image={Web} text1='Web' text2='Developer'/>
        </motion.div>
        <motion.div
        initial={{left: '9rem'}}
        whileInView={{left: '0rem'}}
        transition={transition}
        className='fd2'>
          <FloatingDiv image={Coder} text1='Coder'/>
        </motion.div>
        <div className="blur1"></div>
        <div className="blur2"></div>
      </div>
    </div>
  )
}

export default Intro
