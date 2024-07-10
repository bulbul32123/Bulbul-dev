import React from 'react';
import { motion } from 'framer-motion'
import { slideInFromTop } from './utils/motion';

export default function TextPart({ title }) {
    return (
        <>
            <div className="flex flex-wrap w-full mb-20 relative z-[10]">
                <motion.div variants={slideInFromTop(70, 0)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white">{title}</h1>
                    <div className="h-1.5 w-28 bg-green rounded"></div>
                </motion.div>
                <motion.p variants={slideInFromTop(70, 0.2)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Explore my <strong className='text-green font-normal'>{title}</strong>. Below are brief <br /> descriptions of some of my notable {title}.</motion.p>
            </div>
        </>
    )
}
