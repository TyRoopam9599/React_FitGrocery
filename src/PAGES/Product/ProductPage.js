import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { potatoes, broccoli, mango } from '../../ASSETS/index';
import { Link } from 'react-router-dom';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './ProductPage.css';

const ProductPage = () => {
  const { prodid } = useParams();
  const [imageSet, setimageSet] = useState(null);
  const [productData, setProductData] = useState([]);
  const [activeimg, setActiveImg] = useState({});
  const [count, setCount] = useState(1);

  const getProductDataById = async () => {
    let temp = {
      "Code": 200,
      "Message": "Success",
      "Data": [
        {
          "ProductId": 1,
          "ProductName": "Potatoes",
          "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "ProductImage": [
            {
              id: 1,
              image: potatoes
            },
            {
              id: 2,
              image: mango
            },
            {
              id: 3,
              image: broccoli
            }
          ],
          "ProductCode": "P1",
          "ProductCategory": "Category 1",
          "ProductSubCategory": "Sub Category 1",
          "ProductBrand": "Brand 1",
          "ProductColor": "Color 1",
          "ProductSize": "Size 1",
          "ProductWeight": "Weight 1",
          "ProductMaterial": "Material 1",
          "ProductQuantity": 10,
          "ProductUnit": "Unit 1",
          "ProductPrice": 100,
          "SalesPrice": 80,
          "ProductDiscount": 20,
          "ProductDiscountType": "Percentage",
          "ProductTax": 20,
          "ProductTaxType": "Percentage",
          "ProductShippingCharge": 20,
          "ProductShippingChargeType": "Percentage",
          "ProductShippingTime": "1-2 days",
          "ProductShippingTimeType": "Days",
          "ProductShippingLocation": "Location 1",
          "ProductShippingLocationType": "Country",
          "ProductShippingReturnPolicy": "Return Policy 1",
          "ProductShippingReturnPolicyType": "Days",
          "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
          "ProductShippingReturnPolicyDescriptionType": "Days",
          "ProductReviews": [
            {
              "ReviewId": 1,
              "Name": "ABC",
              "Email": "",
              "Rating": 5,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
              "ReviewId": 2,
              "Name": "DEF",
              "Email": "",
              "Rating": 1,
              "Date": "2021-08-01",
              "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
              "ReviewId": 3,
              "Name": "GHI",
              "Email": "",
              "Rating": 4,
              "Date": "2021-08-01",
              "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
          ]
        }
      ]
    }

    if (temp.Code === 200) {
      setimageSet(temp.Data[0].ProductImage)
      setProductData(temp.Data[0])
      setActiveImg(temp.Data[0].ProductImage[0])
    }
  }

  useEffect(() => {
    getProductDataById();
  }, [])

  return (
    <div className='productpage'>
      <Navbar />
      <Link to='/'>
          <button className='goback'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Go Back
          </button>
        </Link>
      <div className='pc1'>

        <div className='c11'>
          <div className='imgset'>
            {
              imageSet && imageSet?.map((item, index) => {
                return (
                  <div className='imgsmall'
                  onClick={() => {
                    setActiveImg(item)
                  }}>
                    <img src={item.image} alt="" className={
                    activeimg.id === item.id ? 'active': ''
                    }/>
                  </div>
                )
              })
            }
          </div>
          <div className='imgbig'>
            <img src={activeimg.image} alt=""/>
          </div>
        </div>

        <div className='c12'>
          <h1 className='head1'>{productData.ProductName}</h1>
          <div className='c121'>
            <p className='price'>
              ${productData.SalesPrice * count}
              <span>${productData.ProductPrice * count}</span>
            </p>
            <div className='incrdecr'>
              <button id='sub' onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }} >-</button>
              <p>{count}</p>
              <button id='add' onClick={() => {
                if (count < 10) {
                  setCount(count + 1);
                }
              }}>+</button>
            </div>
          </div>
          <div className='btncount'>
          <button onClick={() => {
            alert("Added to cart")
          }}>
            Add to Cart
          </button>
          <button onClick={() => {
            alert("Buy Now")
          }}>Buy Now</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;