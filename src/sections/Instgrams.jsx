import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import instagram from '../util/instagram';
import './style/Instargram.scss';

const Instargram = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1111) {
        if (!swiperRef.current) {
          swiperRef.current = new Swiper('.story-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 25,
            centeredSlides: true,
            centeredSlidesBounds: true,
            loop: true,
            loopedSlides: 5,
            grabCursor: true,
            roundLengths: true,
          });
        }
      } else {
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true);
          swiperRef.current = null;

          const wrapper = document.querySelector('.shopping-story .swiper-wrapper');
          if (wrapper) {
            wrapper.style.removeProperty('transform');
            wrapper.style.removeProperty('display');
            wrapper.style.removeProperty('justify-content');
          }
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="shopping-story">
      <h2 className="story-title">쇼핑 스토리</h2>

      <div className="swiper story-swiper">
        <div className="swiper-wrapper">
          {instagram.map((item) => (
            <div className="swiper-slide story-card" key={`story-${item.id}`}>
              <div className="card-img-box">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="more-btn">(더보기)</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instargram;