import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const { productId } = useParams()
  const { products, currency , addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* -----------Product data-------------  */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>

        {/* --------------Prodcut images------------ */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
            {
              productData.image.map((item, index) => (
                <img src={item} onClick={() => setImage(item)} key={index} className='w-24 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[100%]'>
            <img src={image} className='w-full h-[98%]' />
          </div>
        </div>

        {/*  ----------Product info---------- */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className='pl-6'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-slate-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8 '>
            <p>Select Size</p>
            <div className='flex gap-2'> 
              {productData.sizes.map((item, i) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 rounded bg-gray-200 ${item === size ? "bg-orange-500" : ""}`} key={i}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            {["100% Original product.", "Cash on delivery is available on this product.", "Easy return and exchange policy within 7 days."].map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      {/*--------Description & review section  */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>description</b>
          <b className='border px-5 py-3 text-sm'>Reviews (122)</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta repellat natus ipsum. Amet excepturi pariatur accusantium beatae, eius nam, repudiandae itaque dicta, veritatis fuga distinctio voluptatibus dolore dolorem voluptas.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia labore cum repellat mollitia neque. Ipsa dolores ex, accusamus tenetur deleniti quos expedita totam molestiae quibusdam porro dolorum, commodi libero adipisci.</p>
        </div>
      </div>

         {/*--------Display related products  */}

        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
        
    </div>
  )
    :
    <div className='opacity-0'></div>
}

export default Product