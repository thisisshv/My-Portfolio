import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
// import Boy from '../../img/boy.png'
import MyPhoto from '../../img/my-photo.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesemoji from '../../img/glassesemoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

function Intro() {
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
            <span>Hi, I Am</span>
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
        <img src={Glassesemoji} alt=""/>
        <div className='fd1'>
            <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
        </div>
        <div className='fd2'>
            <FloatingDiv image={Thumbup} text1='Best' text2='Design'/>
        </div>
        {/* Blur Divs */}
        <div className="blur1"></div>
        <div className="blur2"></div>
      </div>
    </div>
  )
}

export default Intro
