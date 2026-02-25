import React from 'react'
import skincare from '../util/instagram'
import './style/Instargram.scss'

const Instgrams = () => {
    return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">
            instagram
        </h2>
        <p className="txt">
            @ShinDongwhan
        </p>
      </div>
      <ul className="instar-list">
          {skincare.map(item => (
          <li 
          className='instar-slider'
          key={item.id}>
            <a href={item.link}>
              <img src={item.image} alt={item.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Instgrams