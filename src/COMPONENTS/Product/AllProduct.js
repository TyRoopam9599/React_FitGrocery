import React from 'react';
import './AllProduct.css';

import {bell_pepper, broccoli, carrots, cucumber, mushrooms, onion, potatoes, tomatoSlice, apple, avocado, banana, guava, mango, pear, watermelon, Butter, Cheese, Cream, cookie, croissant, honey, milk, Juice, yogurt, bbqs, chicken, chicken_bucket, corn_dog, corn_dogs, eggs, yeggs, fried_chicken, meat, meats, Bio_oil, black_pepper, oil, Olive_oil, Salt, turmeric, Jaggery, Oats, Rice, Wheat, Kidney_beans, BodyScrub, Moisturizer, PetShampoo, Shampoo, SkinCare, SunCream} from '../../ASSETS/index.js' ;

import ProductCard from './ProductCard.js';

const AllProduct = () => {
  const products = [
    {
      id:1,
      productImage: potatoes,
      productName: 'Potatoes',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:2,
      productImage: broccoli,
      productName: 'Broccoli',
      productPrice: 70,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:3,
      productImage: mango,
      productName: 'Mango',
      productPrice: 30,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Fruits'
    },
    {
      id:4,
      productImage: bell_pepper,
      productName: 'Bell Pepper',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:5,
      productImage: carrots,
      productName: 'Carrots',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:6,
      productImage: mushrooms,
      productName: 'Mushrooms',
      productPrice: 100,
      countType: '100 grams',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:7,
      productImage: cucumber,
      productName: 'Cucumber',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:8,
      productImage: banana,
      productName: 'Banana',
      productPrice: 10,
      countType: '1 dozen',
      discountPercent: 12,
      category: 'Fruits'
    },
    {
      id:9,
      productImage: onion,
      productName: 'Onion',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:10,
      productImage: tomatoSlice,
      productName: 'Tomato',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Vegetables'
    },
    {
      id:11,
      productImage: watermelon,
      productName: 'Watermelon',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Fruits'
    },
    {
      id:12,
      productImage: avocado,
      productName: 'Avocado',
      productPrice: 100,
      countType: '1 Kg',
      discountPercent: 12,
      category: 'Fruits'
    },
    {
      id: 13,
      productImage: guava,
      productName: 'Guava',
      productPrice: 5,
      countType: '1 Kg',
      discountPercent: 5,
      category: 'Fruits'
    },
    {
      id: 14,
      productImage: pear,
      productName: 'Pear',
      productPrice: 4.49,
      countType: '1 Kg',
      discountPercent: 0,
      category: 'Fruits'
    },
    {
      id: 15,
      productImage: apple,
      productName: 'Apple',
      productPrice: 5.99,
      countType: '1 Kg',
      discountPercent: 10,
      category: 'Fruits'
    },
    {
      id: 16,
      productImage: Butter,
      productName: 'Butter',
      productPrice: 12.99,
      countType: '1 each',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },
    {
      id: 17,
      productImage: Cheese,
      productName: 'Cheese',
      productPrice: 25.99,
      countType: '100 g',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 18,
      productImage: milk,
      productName: 'Milk',
      productPrice: 4.99,
      countType: '1 Ltr',
      discountPercent: 10,
      category: 'Dairy & Bakery'
    },
    {
      id: 19,
      productImage: honey,
      productName: 'Raw Honey',
      productPrice: 6.99,
      countType: '16 oz',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },
    {
      id: 20,
      productImage: yogurt,
      productName: 'Yogurt',
      productPrice: 53.49,
      countType: '1 each',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 21,
      productImage: cookie,
      productName: 'Cookie',
      productPrice: 14.49,
      countType: '1 pack',
      discountPercent: 15,
      category: 'Dairy & Bakery'
    },
    {
      id: 22,
      productImage: croissant,
      productName: 'Croissant',
      productPrice: 17.99,
      countType: '1 each',
      discountPercent: 0,
      category: 'Dairy & Bakery'
    },
    {
      id: 23,
      productImage: Cream,
      productName: 'Shake',
      productPrice: 39.99,
      countType: '1 lb',
      discountPercent: 5,
      category: 'Dairy & Bakery'
    },    
    {
      id: 24,
      productImage: Juice,
      productName: 'Juice',
      productPrice: 5.99,
      countType: '1 glass',
      category: 'Dairy & Bakery',
      discountPercent: 0
    },
    {
      id: 25,
      productImage: chicken,
      productName: 'Chicken',
      productPrice: 12.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 10
    },
    {
      id: 26,
      productImage: chicken_bucket,
      productName: 'Chicken Bucket',
      productPrice: 7.99,
      countType: '1 each',
      category: 'Eggs, Meat & Fish',
      discountPercent: 5
    },
    {
      id: 27,
      productImage: corn_dog,
      productName: 'Corn Dog',
      productPrice: 9.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 28,
      productImage: corn_dogs,
      productName: 'Corn Dog Bucket',
      productPrice: 14.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 5
    },
    {
      id: 29,
      productImage: eggs,
      productName: 'Eggs',
      productPrice: 1.99,
      countType: '1 each',
      category: 'Eggs, Meat & Fish',
      discountPercent: 15
    },
    {
      id: 30,
      productImage: yeggs,
      productName: 'Boiled Eggs',
      productPrice: 6.99,
      countType: '1 each',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 31,
      productImage: fried_chicken,
      productName: 'Fried Chicken',
      productPrice: 9.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 10
    },
    {
      id: 32,
      productImage: meat,
      productName: 'Meat',
      productPrice: 22.99,
      countType: 'Pound',
      category: 'Eggs, Meat & Fish',
      discountPercent: 0
    },
    {
      id: 33,
      productImage: meats,
      productName: 'Meat Bucket',
      productPrice: 50.99,
      countType: 'Pound',
      discountPercent: 5,
      category: 'Eggs, Meat & Fish'
    },
    {
      id: 34,
      productImage: bbqs,
      productName: 'BBQ Bucket',
      productPrice: 33.99,
      countType: '1 each',
      discountPercent: 5,
      category: 'Eggs, Meat & Fish'
    },
    {
      id: 35,
      productImage: Bio_oil,
      productName: 'Bio Oil',
      productPrice: 77.99,
      countType: '16 oz bottle',
      discountPercent: 10,
      category: 'Oil & Spices'
    },
    {
      id: 36,
      productImage: oil,
      productName: 'Mustard Oil',
      productPrice: 43.49,
      countType: '4 oz jar',
      discountPercent: 5,
      category: 'Oil & Spices'
    },
    {
      id: 37,
      productImage: Olive_oil,
      productName: 'Olive Oil',
      productPrice: 66.99,
      countType: '2 oz bottle',
      discountPercent: 0,
      category: 'Oil & Spices'
    },
    {
      id: 38,
      productImage: black_pepper,
      productName: 'Black Pepper',
      productPrice: 12.99,
      countType: '100 g',
      discountPercent: 5,
      category: 'Oil & Spices'
    },
    {
      id: 39,
      productImage: Salt,
      productName: 'Salt',
      productPrice: 4.49,
      countType: '1 Kg',
      discountPercent: 0,
      category: 'Oil & Spices'
    },
    {
      id: 40,
      productImage: turmeric,
      productName: 'Turmeric Powder',
      productPrice: 13.99,
      countType: '3 oz jar',
      discountPercent: 10,
      category: 'Oil & Spices'
    },
    {
      id: 41,
      productImage: Jaggery,
      productName: 'Jaggery (1 kg)',
      productPrice: 9.99,
      countType: 'Pack',
      discountPercent: 15,
      category: 'Foodgrains'
    },
    {
      id: 42,
      productImage: Oats,
      productName: 'Oats (1 kg)',
      productPrice: 42.99,
      countType: 'Pack',
      discountPercent: 5,
      category: 'Foodgrains'
    },
    {
      id: 43,
      productImage: Rice,
      productName: 'Rice (10 kg)',
      productPrice: 71.99,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 44,
      productImage: Wheat,
      productName: 'Wheat (10 kg)',
      productPrice: 43.49,
      countType: 'Pack',
      discountPercent: 0,
      category: 'Foodgrains'
    },
    {
      id: 45,
      productImage: Kidney_beans,
      productName: 'Kidney Beans (1 kg)',
      productPrice: 75.99,
      countType: 'Pack',
      discountPercent: 5,
      category: 'Foodgrains'
    },
    {
      id: 46,
      productImage: BodyScrub,
      productName: 'Body Scrub - 250g',
      productPrice: 40.99,
      countType: 'Each',
      discountPercent: 10,
      category: 'Beauty & Hygiene'
    },
    {
      id: 47,
      productImage: Moisturizer,
      productName: 'Moisturizer - 100g',
      productPrice: 53.99,
      countType: 'Each',
      discountPercent: 5,
      category: 'Beauty & Hygiene'
    },
    {
      id: 48,
      productImage: PetShampoo,
      productName: 'Pet Shampoo - 200ml',
      productPrice: 55.99,
      countType: 'Each',
      discountPercent: 15,
      category: 'Beauty & Hygiene'
    },
    {
      id: 49,
      productImage: Shampoo,
      productName: 'Shampoo - 250ml',
      productPrice: 42.99,
      countType: 'Each',
      discountPercent: 0,
      category: 'Beauty & Hygiene'
    },
    {
      id: 50,
      productImage: SkinCare,
      productName: 'Body Lotion - 200ml',
      productPrice: 33.49,
      countType: 'Each',
      discountPercent: 5,
      category: 'Beauty & Hygiene'
    },
    {
      id: 51,
      productImage: SunCream,
      productName: 'Sun Cream - 200g',
      productPrice: 2.49,
      countType: 'Each',
      discountPercent: 0,
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