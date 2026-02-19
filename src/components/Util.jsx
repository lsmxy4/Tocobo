import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
  return (
    <div className="util">
      {headerData.utils.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="util-item"
          aria-label={item.label}
        >
          <img src={item.icon} alt={item.label} />
        </a>
      ))}
    </div>
  )
}

export default Util