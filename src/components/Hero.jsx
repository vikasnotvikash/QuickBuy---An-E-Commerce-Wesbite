import React from 'react'
import { assets } from '../assets/assets'
import { Tilt } from '@jdion/tilt-react'
import { Power2 } from 'gsap/all'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row mt-[3%] gap-2'>

            {/* Hero Left side */}

            <div className='w-full sm:w-[38vw] mb-[3%] cursor-pointer sm:mb-0 flex items-center justify-center py-10 sm:py-0 bg-[#b79ced] sm:ml-[4%] rounded-md sm:hover:scale-[0.98] transition-all duration-700 overflow-hidden'>
                <div className='text-slate-900'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-slate-900'></p>
                        <p className='uppercase font-medium text-sm md:text-base overflow-hidden'>
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ ease: Power2.easeInOut, duration: 1.5 }}
                                viewport={{ once: true }}
                                className='origin-bottom inline-block'>
                                Our Bestsellers</motion.span></p>
                    </div>
                    <h1 className='font-light text-3xl leading-relaxed sm:py-3 lg:text-5xl mb-3 overflow-hidden'>
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            transition={{ ease: Power2.easeInOut, duration: 1.5 }}
                            viewport={{ once: true }}
                            className='origin-bottom inline-block'>
                            Latest Arrivals</motion.span></h1>
                    <div className='flex gap-2 items-center'>
                        <p className='font-semibold text-sm md:text-base uppercase overflow-hidden'>
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ ease: Power2.easeInOut, duration: 1.5 }}
                                viewport={{ once: true }}
                                className='origin-bottom inline-block'>
                                Shop now</motion.span></p>
                        <p className='w-8 md:w-11 h-[2px] bg-slate-900'></p>
                    </div>
                </div>
            </div>

            {/* Hero right side */}

            <div className='sm:w-[50vw] sm:h-[30vw] h-[50vw] w-full relative rounded-md cursor-pointer'>
                <Tilt className='relative h-full w-full flex items-center justify-center'>
                    <img className='absolute scale-[0.97] opacity-20 h-full w-full object-cover object-right rounded-md' src={assets.Heromain_img} />
                    <img className='absolute scale-[0.94] opacity-50 h-full w-full object-cover object-top rounded-md' src={assets.Heromain_img} />
                    <img className='absolute scale-[0.91] opacity-70 h-full w-full object-cover object-center rounded-md' src={assets.Heromain_img} />
                    <img className='absolute opacity-50 h-[90%] w-[90%] object-contain object-left rounded-md' src={assets.Heromain_img} />
                </Tilt>
            </div>


        </div>
    )
}

export default Hero