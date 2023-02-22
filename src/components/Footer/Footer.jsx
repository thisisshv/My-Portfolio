import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className="footer">
        <img className='f-img' src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
          <a href = "mailto: shv.shivanshu@gmail.com" color='black'>shv.shivanshu@gmail.com</a>
          <div className="f-icons">
            <a href="https://www.linkedin.com/in/shivanshu-kumar-a0b5bb209/" target="_blank">
              <LinkedIn color='white' size='3rem'/>
            </a>
            <a href="https://github.com/thisisshv" target="_blank">
              <Github color='white' size='3rem'/>
            </a>
            <a href="https://instagram.com/thisisshivanshu?igshid=YmJhNjkzNzY=" target="_blank">
              <Insta color='white' size='3rem'/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer