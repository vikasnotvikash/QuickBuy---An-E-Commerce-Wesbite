import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-slate-700 cursor-pointer hover:scale-105 transition ease-in-out' to={`/product/${id}`}>
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