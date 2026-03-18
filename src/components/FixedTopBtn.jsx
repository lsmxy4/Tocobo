import React from 'react'
import './styles/FixedTopBtn.scss'
import{useSmoothScroll} from '../hooks/useSmoothScroll'

const FixedTopBtn = () => {
  const scrollTo = useSmoothScroll()
  return (
    <div className='FixedTopBtn'>
        <button
        className='top-btn'
        onClick={(e) => {
          e.preventDefault(
            scrollTo('hero')
          )
        }}>위로 올라가는 버튼</button>
        <p className='talk-btn'>
            1:1 Talk
        </p>
    </div>
  )
}

export default FixedTopBtn