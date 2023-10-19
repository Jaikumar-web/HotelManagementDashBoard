import React from 'react';
import './RightSide.css'
import EarningChart from './EarningChart';
const RightSide = () => {
  return (
    <div className='RightSide'>
    <div>
    <h3>Recent Bookings</h3>
    <div className='container'>
    </div>
    </div>
    <h3>Earnings Chart</h3>
    <EarningChart />
    </div>
  )
}

export default RightSide
