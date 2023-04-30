import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import BannerSlider from '../../COMPONENTS/BANNERS/BannerSlider';
import HomeCategories from '../../COMPONENTS/Category/HomeCategories';
import ProductSidebar from '../../COMPONENTS/Product/ProductSidebar';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <ProductSidebar />
    </div>
  )
}

export default Home;