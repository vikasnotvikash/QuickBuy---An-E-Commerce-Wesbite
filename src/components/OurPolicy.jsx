import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-5 sm:gap-2 text-center py-14 sm:py-20 text-sm sm:text-sm md:text-base text-slate-900'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-slate-500'>We offer hassle free exchnage policy.</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-slate-500'>We provide 7 days free return policy.</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-slate-500'>We provide best customer support.</p>
        </div>
    </div>
  )
}

export default OurPolicy