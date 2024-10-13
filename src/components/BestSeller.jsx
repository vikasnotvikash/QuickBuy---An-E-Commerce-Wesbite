import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { motion } from 'framer-motion'
import { Elastic } from 'gsap/all'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSeller, setbestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller === true))
        setbestSeller(bestProduct.slice(0, 6))
    }, [])

    return (
        <div className='sm:my-24 my-2'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-slate-700 sm:mb-10 mb-1'>
                    <motion.span initial={{ y: "100%", opacity: 0, scale:0 }}
                        whileInView={{ y: "0%", opacity: 1 ,scale:1}}
                        transition={{ ease: Elastic.easeInOut, duration: 1.2 }}
                        viewport={{ once: true }}
                        className='origin-bottom inline-block'>
                        Discover the most popular items in our store, curated by our team.
                    </motion.span>
                </p>
            </div>

            {/* Rendering BestSeller Products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSeller