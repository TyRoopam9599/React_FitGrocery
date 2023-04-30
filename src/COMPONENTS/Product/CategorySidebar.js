import React from 'react';
import './CategorySidebar.css';
import img1 from '../../ASSETS/Images/F&v.png';
import img2 from '../../ASSETS/Images/Milk.png';
import img3 from '../../ASSETS/Images/Meat.png';
import img4 from '../../ASSETS/Images/oil.png';
import img5 from '../../ASSETS/Images/wheat.png';
import img6 from '../../ASSETS/Images/soap.png';


const CategorySidebar = () => {

  const data = [
    {
      id:1,
      categoryImage: img1,
      categoryName: 'Fruits & Vegetables' 
    },
    {
      id:2,
      categoryImage: img2,
      categoryName: 'Bakery, Cakes & Dairy' 
    },
    {
      id:1,
      categoryImage: img3,
      categoryName: 'Eggs, Meat & Fish' 
    },
    {
      id:1,
      categoryImage: img4,
      categoryName: 'Oil & Spices' 
    },
    {
      id:1,
      categoryImage: img5,
      categoryName: 'Foodgrains' 
    },
    {
      id:1,
      categoryImage: img6,
      categoryName: 'Beauty & Hygiene' 
    }
  ]

  return (
    <div className='categorysidebar'>
      {
        data.map((item) => {
          return (
            <div className='category'>
              <img src={item.categoryImage} alt='noimage'/>
              <h3>{item.categoryName}</h3>
            </div>
          );
        })
      }
    </div>
  )
}

export default CategorySidebar;