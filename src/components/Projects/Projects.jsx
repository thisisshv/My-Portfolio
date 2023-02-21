import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
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
        spaceBetween={30}
        slidesPerView={2.5}
        grabCursor={true}
        className='projects-slider'
        >
          <SwiperSlide>
            <img src={Sidebar} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ecommerce} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HOC} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MusicApp} alt="" />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects
