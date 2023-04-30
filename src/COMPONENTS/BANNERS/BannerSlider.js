import React from 'react'
import Slider from 'react-slick';
import './BannerSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const data = [
    { 
      id:1,
      image: 'https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?s=612x612&w=is&k=20&c=0Cc_VeBxz3RpgWZwP0_TH6aJCxQ8mrjWIqaK76EZ5PE=',
      title: 'Vegetables',
      description: 'We deleiver fresh vegetables at your doorstep',
      button: '#'
    },
    {
      id:2,
      image: 'https://media.istockphoto.com/id/173255460/photo/assortment-of-fruits.jpg?s=1024x1024&w=is&k=20&c=qpTV5qcS8-HOWtGD7RzQZg1p6jpHuDr6J3fR3ZQCXdA=',
      title: 'Fruits',
      description: 'We deleiver fresh fruits at your doorstep',
      button: '#'
    },
    {
      id:3,
      image: 'https://media.istockphoto.com/id/911727186/photo/dairy-products-such-as-milk-cheese-egg-yogurt-and-butter.jpg?s=612x612&w=0&k=20&c=y5k5HDqgK5bCm2rDOIJJDgYhFoRxWWiE67xGKUmY8VM=',
      title: 'Milk Products',
      description: 'We deliver fresh milk and its product at your doorstep',
      button: '#'
    },
    {
      id:4,
      image: 'https://media.istockphoto.com/id/535403973/photo/raw-products-on-the-wooden-background.jpg?s=612x612&w=0&k=20&c=wJNJEmG6F9SGVYlfMnLzaqzNpPbggBF8zTdgguigIzo=',
      title: 'Eggs, Meat & Fish',
      description: 'We deliver fresh eggs, meat & fish at your doorstep'
    },
    {
      id:5,
      image: 'https://media.istockphoto.com/id/1038356386/photo/various-spices-on-wooden-background.jpg?s=612x612&w=0&k=20&c=cmz1cnYIkldlAZgYpsYMhOdbrSNSuP8txPV4zHpbZR0=',
      title: 'Oil & Masala',
      description: 'We deliver Oil & Spices at your doorstep',
      button: '#'
    },
    {
      id:6,
      image: 'https://media.istockphoto.com/id/671580278/photo/varieties-of-grains-seeds-and-raw-quino.jpg?s=612x612&w=0&k=20&c=ATTVKd0ls6JoL4AvGZ-K6bs_q8rlkJDEyzOLu0d2vrA=',
      title: 'Foodgrains',
      description: 'We deliver Foodgrains at your doorstep',
      button: '#'
    },
    {
      id:7,
      image: 'https://media.istockphoto.com/id/1219116819/photo/body-care-cosmetic-products.jpg?s=612x612&w=0&k=20&c=4pgFhWHivyDuS3Xq9jlmbt0FNF8gbJOoAFTyVGBVM4M=',
      title: 'Beauty & Hygiene',
      description: 'We deliver personal care product at your doorstep',
      button: '#'
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    slideToShow:1,
    slideToScroll:1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    pauseOnHover: true
  };

  return (
    <div className='bannerslider'>
      <Slider className='bannerslider' {...settings}>
        {
          data.map(item => {
            return (
              <div className='imagecont' key={item.id}>
                <img src={item.image} alt='noImage'/>
                <div className='content'>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <button>Show more</button>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default BannerSlider; 