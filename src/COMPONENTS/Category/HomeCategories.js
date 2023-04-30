import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/soap.png';
import img2 from '../../ASSETS/Images/Milk.png';
import img3 from '../../ASSETS/Images/F&v.png';
import img4 from '../../ASSETS/Images/Meat.png';
import img5 from '../../ASSETS/Images/oil.png';
import img6 from '../../ASSETS/Images/wheat.png';

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
          <img src={img3} alt='img3' />
        <div className='content'>
          <h1>Fruits & vegetables</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>Bakery, Cakes & Dairy</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
        <div className='content'>
          <h1>Eggs, Meat & Fish</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img5} alt='img1' />
        <div className='content'>
          <h1>Oil & Spices</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img6} alt='img1' />
        <div className='content'>
          <h1>Foodgrains</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>Beauty & Hygiene</h1>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories;