import React from 'react';
import './ProductSidebar.css';
import CategorySidebar from './CategorySidebar';
import AllProduct from './AllProduct';

const Product_Sidebar = () => {
  return (
    <div className='productSidebar'>
        <CategorySidebar />
        <AllProduct />
    </div>
  )
}

export default Product_Sidebar;