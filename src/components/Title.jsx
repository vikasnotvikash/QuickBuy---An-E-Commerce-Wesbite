import React from 'react'
import { motion } from 'framer-motion'
import { Power3 } from 'gsap/all'

const Title = ({ text1, text2 }) => {

    return (
        <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-slate-500 sm:text-[2vw] text-[18px] overflow-hidden'>
                <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{ ease: Power3.easeInOut, duration: 1 }}
                    viewport={{ once: true }}
                    className='origin-bottom inline-block'>{text1}
                </motion.span>
                &nbsp;&nbsp;
                <span className='text-slate-900 font-medium overflow-hidden'>
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ ease: Power3.easeInOut, duration: 1 }}
                        viewport={{ once: true }}
                        className='origin-bottom inline-block'>{text2}
                    </motion.span>
                </span></p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
    )
}

export default Title