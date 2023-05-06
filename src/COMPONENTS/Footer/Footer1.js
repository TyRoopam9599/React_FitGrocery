import React from 'react';
import veges from '../../ASSETS/veges.png';
import './Footer1.css';

const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={veges} alt='veges'/>
        </div>
        <div className='right'>
            <h1>Grocery at your doorstep</h1>
            <p>We deliver fresh vegetables, fruits, dairy products, foodgrains, oil, spices, eggs, meat, fish, beauty and hygiene products at your doorstep</p>
        </div>
    </div>
  )
}

export default Footer1;