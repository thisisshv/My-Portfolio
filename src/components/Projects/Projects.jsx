import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import BrickBreakerGame from '../../img/Brick-Breaker-Game.jpg'
import SpotifyClone from '../../img/Spotify Clone.jpg'
import Chatmate from '../../img/Chatmate.jpg'
import AlarmClock from '../../img/Alarm clock app.jpg'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id='Projects'>
      <span style={{color: darkMode? 'white': ''}}>My</span>
      <span>Projects</span>
      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={2.5}
      grabCursor={true}
      className='projects-slider'
      >
        <SwiperSlide>
          <a href="https://github.com/thisisshv/Break-The-Brick" target='_blank'>
            <img src={BrickBreakerGame} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/thisisshv/Spotify-Clone" target='_blank'>
            <img src={SpotifyClone} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/thisisshv/chatmate" target='_blank'>
            <img src={Chatmate} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/thisisshv/Alarm-Clock" target='_blank'>
            <img src={AlarmClock} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects
