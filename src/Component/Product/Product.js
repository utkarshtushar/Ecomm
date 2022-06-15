import currencyFormatter from 'currency-formatter';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Product.scss'
const Product = () => {
    const {products}= useSelector(state => state.ProductReducer)
    return (
        <div className='pt-10 pb-10'>
            <h1 className='text-center text-4xl mb-12 font-bold'>Disover Our <br /> Latest Collection</h1>
            
            <div className="grid  lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-6 mx-3.5">
                
            {
               products.map(pd =>(
                   <div className="rounded shadow py-5 px-5 bg-gray-100 " key={pd.id}>
                    <Link to={`/details/${pd.id}`}>
                        <img className='w-full h-64 pd-image' src={pd.img} alt="" />
                    </Link>
                       <h3 className='text-gray-500 mt-2.5'>{pd.name}</h3>
                       <div className="grid grid-cols-3 mt-2.5">
                            <h5 className='font-bold line-through'>{currencyFormatter.format(pd.price,{ code: 'USD' })} </h5>
                            <span className='text-gray-400 lg:-ml-7 -ml-10'>{pd.discount}%</span>
                            <h5 className='font-bold text-right'>{currencyFormatter.format(pd.discoutPrice,{ code: 'USD' })} </h5> 
                         </div>
                   </div>
                ))
           }
            </div>

        </div>
    );
};

export default Product; 