import React from 'react'
import '../Card.css';

function Card({imgUrl,lastName,firstName,raffleNo,myRefCode,votingState}) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={'../../backend/uploads/'+imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          Last Name: {lastName}
        </div>

        <div className='card-body'>
          First Name:  {firstName}
        </div>
        <div className='card-body'>
          Raffle Ticket No:  #{raffleNo}
        </div>
        <div className='card-body'>
          Referral Code:  {myRefCode}
        </div>
        <div className='card-body'>
          State:  {votingState}
        </div>
      </div>
    </div>
  )
}

export default Card
