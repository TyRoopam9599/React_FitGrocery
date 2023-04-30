import React from 'react';
import './ProductCard.css';

const ProductCard = ({ data }) => {
    return (
        <div className='product'>
            <div className='s1'>
                <img src={data.productImage} alt='noImage' />
            </div>
            <div className='s2'>
                <h3>
                    $ {
                        Math.round(data.productPrice - (data.productPrice * data.discountPercent / 100))
                    }
                    
                    <span>$ {data.productPrice}</span>
                </h3>
                <p>{data.productName}</p>
            </div>
            <div className='s3'>
                <p>{data.countType}</p>
            </div>
            <div className='addbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </div>
        </div>
    )
}

export default ProductCard;