import React from 'react'
import { reviewData } from '../util/reviewData'
import './style/Reviews.scss'

const Reviews = () => {
  return (
    <div className="review-container">
      <div className="inner">
        <div className="review-header">
          <h2 className="tit">이달의 리뷰</h2>
          <p className="sub-txt">
            지난 2009년 창립한 애터미는 2025년 기준 한국을 비롯해<br/>
            전 세계 27개 지역에서 직접판매 영업을 하고 있는<br/> 
            글로벌 네트워크 마케팅 기업입니다.
          </p>
        </div>

        <div className="review-grid">
          {reviewData.map((item) => (
            <div key={item.id} className="review-card">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>
              
              <div className="txt-box">
                <h3 className="prod-name">
                  <span className="full-name">{item.title}</span>
                  <span className="short-name">{item.shortTitle}</span>
                </h3>
                <p className="prod-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews