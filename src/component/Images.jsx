import React from 'react'
import search from "../assets/images/forward.png";


function Images({pinSize, name, imgSrc}) {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt={name} className='mainPic'/>
      <div className='content'>
        <h3>{name}</h3>
        <div className='search'>
            <img src={search} alt="Search" />
          </div>
      </div>
    </div>
  )
}

export default Images
