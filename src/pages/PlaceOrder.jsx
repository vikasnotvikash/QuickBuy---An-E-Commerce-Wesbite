import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setmethod] = useState('cod')
  const { navigate } = useContext(ShopContext)



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' />
        </div>
        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' />
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
        </div>
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
      </div>

      {/* Right side */}

      <div className='mt-8 sm:mr-[10%] mr-[0%]'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHODS'} />

          {/* Payment method selection */}
          <div className='flex flex-col lg:flex-row gap-3'>
            <div onClick={() => setmethod('Stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Stripe' ? "bg-green-400" : ""}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' />
            </div>
            <div onClick={() => setmethod('Razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Razorpay' ? "bg-green-400" : ""}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' />
            </div>
            <div onClick={() => setmethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? "bg-green-400" : ""}`}></p>
              <p className='text-slate-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate(`/orders`)} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder