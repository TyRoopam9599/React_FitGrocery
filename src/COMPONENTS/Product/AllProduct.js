import React from 'react';
import './AllProduct.css';
import img1 from '../../ASSETS/Images/F&v.png';
import img2 from '../../ASSETS/Images/Milk.png';
import img3 from '../../ASSETS/Images/Meat.png';
import img4 from '../../ASSETS/Images/oil.png';
import img5 from '../../ASSETS/Images/wheat.png';
import img6 from '../../ASSETS/Images/soap.png';
import ProductCard from './ProductCard.js';

const AllProduct = () => {
  const products = [
    {
      id:1,
      productImage: img1,
      productName: 'Apple',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:2,
      productImage: img1,
      productName: 'Orange',
      productPrice: 70,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:3,
      productImage: img1,
      productName: 'Banana',
      productPrice: 30,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:4,
      productImage: img1,
      productName: 'Papaya',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:5,
      productImage: img1,
      productName: 'Mango',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:6,
      productImage: img1,
      productName: 'Guava',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:7,
      productImage: img1,
      productName: 'Cherry',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:8,
      productImage: img1,
      productName: 'Lichi',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:9,
      productImage: img1,
      productName: 'Strawberry',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:10,
      productImage: img1,
      productName: 'Grapes',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:11,
      productImage: img1,
      productName: 'Watermelon',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id:12,
      productImage: img1,
      productName: 'Melon',
      productPrice: 100,
      countType: '1 each',
      discountPercent: 12,
      category: 'Fruits & Vegetables'
    },
    {
      id: 13,
      productImage: img2,
      productName: 'Organic Milk',
      productPrice: 3.99,
      countType: 'Gallon',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },
    {
      id: 14,
      productImage: img2,
      productName: 'Grass-Fed Butter',
      productPrice: 4.49,
      countType: '8 oz',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 15,
      productImage: img2,
      productName: 'Organic Yogurt',
      productPrice: 2.99,
      countType: '16 oz',
      discountPercent: 10,
      category: 'Dairy & Bakery'
    },
    {
      id: 16,
      productImage: img2,
      productName: 'Cage-Free Eggs',
      productPrice: 2.99,
      countType: 'Dozen',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },
    {
      id: 17,
      productImage: img2,
      productName: 'Organic Bread Flour',
      productPrice: 5.99,
      countType: '5 lb',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 18,
      productImage: img2,
      productName: 'Whole Wheat Flour',
      productPrice: 4.99,
      countType: '5 lb',
      discountPercent: 10,
      category: 'Dairy & Bakery'
    },
    {
      id: 19,
      productImage: img2,
      productName: 'Raw Honey',
      productPrice: 6.99,
      countType: '16 oz',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },
    {
      id: 20,
      productImage: img2,
      productName: 'Organic Rolled Oats',
      productPrice: 3.49,
      countType: '24 oz',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 21,
      productImage: img2,
      productName: 'Organic Raisins',
      productPrice: 4.49,
      countType: '12 oz',
      discountPercent: 15,
      category: 'Dairy & Bakery'
    },
    {
      id: 22,
      productImage: img2,
      productName: 'Sourdough Starter',
      productPrice: 7.99,
      countType: '4 oz',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 23,
      productImage: img2,
      productName: 'Raw Almonds',
      productPrice: 9.99,
      countType: '1 lb',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },    
    {
      id: 24,
      productImage: img3,
      productName: 'Boneless Skinless Chicken Breast',
      productPrice: 5.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 25,
      productImage: img3,
      productName: 'Wild-Caught Alaskan Sockeye Salmon',
      productPrice: 12.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 10
    },
    {
      id: 26,
      productImage: img3,
      productName: 'Ground Grass-Fed Beef',
      productPrice: 7.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 5
    },
    {
      id: 27,
      productImage: img3,
      productName: 'Large White Shrimp',
      productPrice: 9.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 28,
      productImage: img3,
      productName: 'Organic Free-Range Chicken Thighs',
      productPrice: 4.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 5
    },
    {
      id: 29,
      productImage: img3,
      productName: 'Wild-Caught Yellowfin Tuna Steaks',
      productPrice: 18.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 15
    },
    {
      id: 30,
      productImage: img3,
      productName: 'Boneless Pork Loin Chops',
      productPrice: 6.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 31,
      productImage: img3,
      productName: 'Wild-Caught North Atlantic Cod Fillets',
      productPrice: 9.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 10
    },
    {
      id: 32,
      productImage: img3,
      productName: 'Jumbo Lump Crab Meat',
      productPrice: 22.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 33,
      productImage: img3,
      productName: 'Grass-Fed Beef Ribeye Steak',
      productPrice: 16.99,
      countType: 'Pound',
      discountPercent: 5,
      category: 'Eggs, Meat & Fish'
    },
    {
      id: 34,
      productImage: img3,
      productName: 'Organic Cage-Free Large Brown Eggs',
      productPrice: 3.99,
      countType: 'Dozen',
      discountPercent: 5,
      category: 'Eggs, Meat & Fish'
    },
    {
      id: 35,
      productImage: img4,
      productName: 'Organic Extra Virgin Olive Oil',
      productPrice: 7.99,
      countType: '16 oz bottle',
      discountPercent: 10,
      category: 'Oil & Spices'
    },
    {
      id: 36,
      productImage: img4,
      productName: 'Ground Cinnamon',
      productPrice: 3.49,
      countType: '4 oz jar',
      discountPercent: 5,
      category: 'Oil & Spices'
    },
    {
      id: 37,
      productImage: img4,
      productName: 'Pure Vanilla Extract',
      productPrice: 6.99,
      countType: '2 oz bottle',
      discountPercent: 0,
      category: 'Oil & Spices'
    },
    {
      id: 38,
      productImage: img4,
      productName: 'Garlic Powder',
      productPrice: 2.99,
      countType: '4 oz jar',
      discountPercent: 5,
      category: 'Oil & Spices'
    },
    {
      id: 39,
      productImage: img4,
      productName: 'Black Peppercorns',
      productPrice: 4.49,
      countType: '3 oz jar',
      discountPercent: 0,
      category: 'Oil & Spices'
    },
    {
      id: 40,
      productImage: img4,
      productName: 'Chili Powder',
      productPrice: 3.99,
      countType: '3 oz jar',
      discountPercent: 10,
      category: 'Oil & Spices'
    },
    {
      id: 41,
      productImage: img4,
      productName: 'Organic Coconut Oil',
      productPrice: 9.99,
      countType: '32 oz jar',
      discountPercent: 15,
      category: 'Oil & Spices'
    },
    {
      id: 42,
      productImage: img4,
      productName: 'Ground Turmeric',
      productPrice: 2.99,
      countType: '3 oz jar',
      discountPercent: 5,
      category: 'Oil & Spices'
    },
    {
      id: 43,
      productImage: img4,
      productName: 'Sea Salt',
      productPrice: 1.99,
      countType: '16 oz jar',
      discountPercent: 0,
      category: 'Oil & Spices'
    },
    {
      id: 44,
      productImage: img4,
      productName: 'Ground Paprika',
      productPrice: 3.49,
      countType: '3 oz jar',
      discountPercent: 0,
      category: 'Oil & Spices'
    },
    {
      id: 45,
      productImage: img4,
      productName: 'Italian Seasoning',
      productPrice: 2.99,
      countType: '1 oz jar',
      discountPercent: 5,
      category: 'Oil & Spices'
    },
    {
      id: 46,
      productImage: img5,
      productName: 'Organic Brown Rice (1 kg)',
      productPrice: 4.99,
      countType: 'Pack',
      discountPercent: 10,
      category: 'Foodgrains'
    },
    {
      id: 47,
      productImage: img5,
      productName: 'Whole Wheat Flour (2 kg)',
      productPrice: 3.99,
      countType: 'Pack',
      discountPercent: 5,
      category: 'Foodgrains'
    },
    {
      id: 48,
      productImage: img5,
      productName: 'Quinoa (500 gm)',
      productPrice: 5.99,
      countType: 'Pack',
      discountPercent: 15,
      category: 'Foodgrains'
    },
    {
      id: 49,
      productImage: img5,
      productName: 'Organic Besan (1 kg)',
      productPrice: 2.99,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 50,
      productImage: img5,
      productName: 'Rolled Oats (1 kg)',
      productPrice: 3.49,
      countType: 'Pack',
      discountPercent: 5,
      category: 'Foodgrains'
    },
    {
      id: 51,
      productImage: img5,
      productName: 'Chana Dal (1 kg)',
      productPrice: 2.49,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 52,
      productImage: img5,
      productName: 'Maida (1 kg)',
      productPrice: 1.99,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 53,
      productImage: img5,
      productName: 'Sona Masoori Rice (5 kg)',
      productPrice: 8.99,
      countType: 'Pack',
      discountPercent: 10,
      category: 'Foodgrains'
    },
    {
      id: 54,
      productImage: img5,
      productName: 'Urad Dal (1 kg)',
      productPrice: 3.49,
      countType: 'Pack',
      discountPercent: 5,
      category: 'Foodgrains'
    },
    {
      id: 55,
      productImage: img5,
      productName: 'Bajra (500 gm)',
      productPrice: 1.99,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 56,
      productImage: img5,
      productName: 'Jowar Flour (1 kg)',
      productPrice: 2.99,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 57,
      productImage: img5,
      productName: 'Roasted Vermicelli (200 gm)',
      productPrice: 1.49,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 58,
      productImage: img6,
      productName: 'Toothpaste - 100g',
      productPrice: 2.49,
      countType: 'Each',
      discountPercent: 10,
      category: 'Beauty & Hygiene'
    },
    {
      id: 59,
      productImage: img6,
      productName: 'Shampoo - 500ml',
      productPrice: 6.99,
      countType: 'Bottle',
      discountPercent: 15,
      category: 'Beauty & Hygiene'
    },
    {
      id: 60,
      productImage: img6,
      productName: 'Conditioner - 500ml',
      productPrice: 6.99,
      countType: 'Bottle',
      discountPercent: 15,
      category: 'Beauty & Hygiene'
    },
    {
      id: 61,
      productImage: img6,
      productName: 'Body Lotion - 400ml',
      productPrice: 4.99,
      countType: 'Bottle',
      discountPercent: 5,
      category: 'Beauty & Hygiene'
    },
    {
      id: 62,
      productImage: img6,
      productName: 'Toothbrush',
      productPrice: 1.99,
      countType: 'Each',
      discountPercent: 0,
      category: 'Beauty & Hygiene'
    },
    {
      id: 63,
      productImage: img6,
      productName: 'Hand Wash - 250ml',
      productPrice: 2.99,
      countType: 'Bottle',
      discountPercent: 10,
      category: 'Beauty & Hygiene'
    },
    {
      id: 64,
      productImage: img6,
      productName: 'Deodorant - 75g',
      productPrice: 3.49,
      countType: 'Each',
      discountPercent: 5,
      category: 'Beauty & Hygiene'
    },
    {
      id: 65,
      productImage: img6,
      productName: 'Razor',
      productPrice: 5.99,
      countType: 'Each',
      discountPercent: 0,
      category: 'Beauty & Hygiene'
    },
    {
      id: 66,
      productImage: img6,
      productName: 'Shaving Cream - 200ml',
      productPrice: 3.99,
      countType: 'Can',
      discountPercent: 10,
      category: 'Beauty & Hygiene'
    },
    {
      id: 67,
      productImage: img6,
      productName: 'Facial Cleanser - 150ml',
      productPrice: 8.99,
      countType: 'Bottle',
      discountPercent: 15,
      category: 'Beauty & Hygiene'
    },
    {
      id: 68,
      productImage: img6,
      productName: 'Mouthwash - 500ml',
      productPrice: 4.99,
      countType: 'Bottle',
      discountPercent: 5,
      category: 'Beauty & Hygiene'
    },
    {
      id: 69,
      productImage: img6,
      productName: 'Body Wash - 400ml',
      productPrice: 4.99,
      countType: 'Bottle',
      discountPercent: 5,
      category: 'Beauty & Hygiene'
    }    
  ]
  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
        {
          products.map((item) => {
            return (
              <ProductCard data={item} key={item.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct;