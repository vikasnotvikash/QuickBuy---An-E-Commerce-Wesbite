import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {
  return (
    <div className='sm:mb-[0px] mb-[-24vw]'>

      <div className='text-2xl text-center pt-2 sm:pt-10 text-slate-700 mb-[-13px]'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-8 sm:gap-12 items-center justify-center'>
        <img className='w-full md:max-w-[360px] rounded-md' src={assets.about_img} />
        <div className='flex flex-col justify-start gap-6 md:w-2/4 text-sm text-slate-700'>
          <p>Welcome to [QuickBuy], your number one source for [Clothings]. We’re dedicated to giving you the very best of [Clothings], with a focus on quality, customer service, and uniqueness.</p>
          <p>Founded in [2019] by [ELON MUSK], [QuickBuy] has come a long way from its beginnings in [MUMBAI]. When [ELONMUSK] first started out, their passion for [specific passion related to the product, e.g., “eco-friendly fashion”]</p>
          <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.</p>
        </div>
      </div>

      <div className='text-xl my-4 flex justify-center items-center'>
        <p className='text-slate-700 font-medium mb-10'>Why Choose Us</p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-sky-200 hover:text-slate-700 transition-all duration-300 text-slate-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-sky-200 hover:text-slate-700 transition-all duration-300 text-slate-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Empore iusto assumenda iure a adipisci sed repellat laudantium voluptatem labore fugiat minima commodi amet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-sky-200 hover:text-slate-700 transition-all duration-300 text-slate-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Rerum culpa doloremque quaerat, placeat voluptas reprehenderit.</p>
        </div>
      </div>

    </div>
  )
}

export default About