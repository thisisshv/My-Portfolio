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
            <span>shv.shivanshu@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <LinkedIn color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer