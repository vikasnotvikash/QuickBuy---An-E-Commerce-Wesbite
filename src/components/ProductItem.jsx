import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useNavigate } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <Link className='text-slate-700 cursor-pointer hover:scale-105 transition-all duration-1' to={`/product/${id}`} onClick={() => navigate(scrollTo(0,0))} >
            <div className='overflow-hidden rounded-md'>
                <img src={image[0]} />
            </div>
            <div className='relative sm:static'>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm absolute right-2 bottom-1 sm:static sm:right-0 sm:bottom-0 font-medium'>{currency}{price}</p>
            </div>
        </Link>
    )
}

export default ProductItem