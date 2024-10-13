import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className='sm:mt-0 mt-[-12%]'>
      <div className='text-center text-2xl pt-10 sm:mb-0 mb-[-5%]   text-slate-700'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-18 sm:mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-md' src={assets.contact_img} />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-slate-700'>Our Office</p>
          <p className='text-slate-500'>8756 Sydney, Australia</p>
          <p className='text-slate-500'>Tel : (765) 666-876  Email: quickbuy@gmail.com</p>
          <p className='font-semibold text-lg text-slate-700'>Careers at Quickbuy</p>
          <p className='text-slate-700'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white rounded-md transition-all duration-1'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact