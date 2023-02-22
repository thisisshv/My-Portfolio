import React from 'react'
import './Achievements.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import UdemyBootcamp from '../../img/Udemy Bootcamp.jpg'
import HackerrankJava from '../../img/Hackerrank - Java.jpg'
import HackerrankCpp from '../../img/Hackerrank - C++.jpg'
import HackerrankPython from '../../img/Hackerrank - Python.jpg'
import UniOfLeeds from '../../img/Uni of Leeds.jpg'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Achievements() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const achievements=[
        {
            img: UdemyBootcamp,
            details: "Certified with The Web Developer Bootcamp 2022 by Udemy"
        },
        {
            img: HackerrankJava,
            details: "Have a Java Gold Badge on Hackerrank"
        },
        {
            img: HackerrankCpp,
            details: "Have a C++ Gold Badge on Hackerrank"
        },
        {
            img: HackerrankPython,
            details: "Have a Python Bronze Badge on Hackerrank"
        },
        {
            img: UniOfLeeds,
            details: "Certified with Communication and Interpersonal Skills at Work by University of Leeds and Institute of Coding"
        }
    ]
    return (
        <>
        <div className="a-heading" id='Achievements'>
            <span style={{color: darkMode? 'white': ''}}>My</span>
            <span>Achievements</span>
        </div>
        <div className="a-wrapper">
            <div className="a-blur1"></div>
            <div className="a-blur2"></div>

            <Swiper
            modules={[Pagination, Navigation]}
            navigation
            loop
            pagination={{clickable:true}}
            slidesPerView={1}
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
