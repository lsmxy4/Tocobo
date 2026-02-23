import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './style/Hero.scss'
import {heroSlides} from '../util/hero'

const Hero = () => {
  return (
    <div className="hero-container">
   <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          el:'.swiper-pagination',
          type: 'fraction'
        }}
        navigation={{
          nextEl:'.arr-next',
          prevEl:'.arr-prev'
        }}
        className="hero-slider"
        loop={true}
      >

        {heroSlides.map((slide) => (
          <SwiperSlide 
          className = {`hero-slider ${slide.id}`}
          style={{backgroundImage:`url(${slide.image.desktop})`}}
          key={slide.id}>
            <div className="inner">
              <div className="t-wrap">
                <h2 
                dangerouslySetInnerHTML={{__html:slide.title}}
                className="tit"/>
                  
                <p className="txt">
                  {slide.submit}
                </p>
                <a href={slide.ctaHref} className="btn">
                  {slide.ctaText}
                </a>
              </div>
            </div>
            </SwiperSlide>
        ))}
      
      <div className="hero-nav">
        <div className="arr-prev">prev</div>
        <div className="swiper-pagination"></div>
        <div className="arr-next">next</div>
      </div>
      </Swiper>
    </div>
  )
}

export default Hero