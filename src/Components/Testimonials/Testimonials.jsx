import React from 'react'
import './Testimonials.css'
import AVATR1 from '../../assets/avatar1.jpg'
import AVATR2 from '../../assets/avatar2.jpg'
import AVATR3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





export default function Testimonials() {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATR1} className='w-100' alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam non, maxime optio repellat, eum cupiditate aspernatur quidem recusandae officiis eos animi consectetur facilis quo. Exercitationem omnis ab voluptate fugit!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATR2} className='w-100' alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam non, maxime optio repellat, eum cupiditate aspernatur quidem recusandae officiis eos animi consectetur facilis quo. Exercitationem omnis ab voluptate fugit!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATR3} className='w-100' alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam non, maxime optio repellat, eum cupiditate aspernatur quidem recusandae officiis eos animi consectetur facilis quo. Exercitationem omnis ab voluptate fugit!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
