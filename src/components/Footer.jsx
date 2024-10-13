import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='sm:mx-10 mx-1'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 sm:gap-14 my-10 mt-14 sm:mt-40 text-sm'>

                {/* left section */}
                <hr  className='h-[0.5px] sm:hidden block bg-slate-300'/>
                <div>
                    <img className='mb-5 w-40 cursor-pointer' src={assets.Quickbuy_logo} />
                    <p className='w-full md:2/3 text-slate-700 leading-loose sm:text-lg text-[15px] sm:ml-[1.5%] ml-[3%]'>
                    Shop with Confidence, Quality Guaranteed.
                    </p>
                </div>

                {/* center section */}
                <div>
                    <p className='text-xl font-medium mb-5 cursor-pointer'>Company</p>
                    <ul className='flex flex-col gap-2 text-slate-700 cursor-pointer'>
                        {["Home","About Us","Delivery","Privacy Policy"].map((item,index) => 
                        (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* right section */}
                <div>
                    <p className='text-xl font-medium mb-5 cursor-pointer'>GET IN TOUCH</p>
                    <ul>
                        {["+1-000-000-0000","quickbuy123@gmail.com", "Instagram"].map((item,index)=> (
                            <li className='flex flex-col text-slate-700 cursor-pointer gap-2 mb-1.5' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright section */}
            <div>
                <hr />
                <p className='py-6 text-sm text-center'>Copyright&nbsp; @2024 &nbsp;QuickBuy - An Ecommerce Website | All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer