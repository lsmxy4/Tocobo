import React from 'react'
import skincare from '../util/skincare'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import './style/Skincare.scss'

const SkinCare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          ATOMY COSMETICS
        </h2>
        <p className="txt">
          피부에 꼭 필요한 성분만 담아, 매일 안심하고 사용하는 스킨케어<br/>
          과한 자극 없이 피부 본연의 밸런스를 지켜주는 데일리 케어<br/>
          기본에 충실한 처방으로 피부의 변화를 만들어갑니다
        </p>
        <a href="#" className="btn">
          meet tocobo
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop ={true}
          className="skincare-slider">
            {skincare.map((sl) =>(
              <SwiperSlide
              style={{backgroundImage:`url(${sl.image})`}}
              key={sl.id}>
                <a href={sl.link}>
                  {sl.id}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SkinCare