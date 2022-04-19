import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='home-page'>
        <h2 className='home-page-title'>Are you ready for the shopping experience of your life time?</h2>
        <Link to="shop">
          <h2 className='home-page-link'>SHOP NOW</h2>
        </Link>
    </div>
  )
}
