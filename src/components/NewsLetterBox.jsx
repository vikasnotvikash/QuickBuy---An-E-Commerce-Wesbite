import React from 'react'

const NewsLetterBox = () => {

    const handler = (event) => {
        event.preventDefault();
    }


  return (
    <div className='text-center'>
        <p className='sm:text-2xl text-xl font-medium text-slate-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-3 text-sm sm:text-md'>
            Sign up for our newsletter and receive exclusive discounts and promotions.
        </p>
        <form onSubmit={handler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-6'>
            <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required/>
            <button type='submit' className='hover:bg-black hover:text-white text-white bg-slate-500 text-xs px-10 py-4 sm:rounded-tr-md sm:rounded-br-md'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox