import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { motion } from 'framer-motion'
import { Elastic } from 'gsap/all'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 12))
    }, [])


    return (
        <div className='my-0 sm:my-28'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-slate-700 mb-10'>
                    <motion.span initial={{ y: "100%", opacity: 0, scale:0 }}
                        whileInView={{ y: "0%", opacity: 1 , scale:1}}
                        transition={{ ease: Elastic.easeInOut, duration: 1.2 }}
                        viewport={{ once: true }}
                        className='origin-bottom inline-block'>
                        Discover our latest products, crafted with the latest trends in design and functionality.
                    </motion.span>
                </p>
            </div>

            {/* Rendering Products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-[-10%] sm:mt-0 sm:gap-4 gap-y-6'>
                {
                    LatestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection