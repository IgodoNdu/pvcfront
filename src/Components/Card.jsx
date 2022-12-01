import React from 'react'
import '../Card.css';

function Card({imgUrl,fullname,phone}) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={'../../backend/uploads/'+imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
            {fullname}
        </div>

        <div className='card-body'>
            {phone}
        </div>
      </div>
    </div>
  )
}

export default Card
