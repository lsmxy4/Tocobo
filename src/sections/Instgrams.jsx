import React from 'react'
import instagram from '../util/instagram'
import './style/Instargram.scss'
const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@tocobo_official</p>
      </div>
      <ul className="instar-list">
        {instagram.map((i)=>(

        <li key={i.id}>
          <a href={i.link}
          alt={i.alt}
          style={{backgroundImage:`url(${i.image})`}}

          >{i.id}</a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram