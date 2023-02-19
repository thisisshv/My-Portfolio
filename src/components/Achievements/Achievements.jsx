import React from 'react'
import './Achievements.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Achievements() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const achievements=[
        {
            img: profilePic1,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta soluta non quaerat perspiciatis deserunt natus labore animi doloribus enim, sunt voluptatum earum esse hic quae beatae quod quis porro?"
        },
        {
            img: profilePic2,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta soluta non quaerat perspiciatis deserunt natus labore animi doloribus enim, sunt voluptatum earum esse hic quae beatae quod quis porro?"
        },
        {
            img: profilePic3,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta soluta non quaerat perspiciatis deserunt natus labore animi doloribus enim, sunt voluptatum earum esse hic quae beatae quod quis porro?"
        },
        {
            img: profilePic4,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dicta soluta non quaerat perspiciatis deserunt natus labore animi doloribus enim, sunt voluptatum earum esse hic quae beatae quod quis porro?"
        }
    ]
  return (
    <>
    <div className="a-heading">
        <span style={{color: darkMode? 'white': ''}}>My</span>
        <span>Achievements</span>
    </div>
    <div className="a-wrapper">
        <div className="a-blur1"></div>
        <div className="a-blur2"></div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        grabCursor={true}
        >
            {achievements.map((achievements, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="achievements">
                            <img src={achievements.img} alt="" />
                            <span>{achievements.details}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
    </>
  )
}

export default Achievements
