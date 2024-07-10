import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../utils/motion';
import { infoData } from '../utils';

export default function PersonalInfo() {
    return (
        <div className='mt-4 '>
            <motion.h4 variants={slideInFromLeft(-50, 0.4)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='text-white font-extrabold text-2xl'>Personal Information</motion.h4>
            <div className="flex gap-3 flex-wrap mt-3 max-md:flexCenter">
                {infoData.map((data, index) => (
                    <motion.div variants={slideInFromLeft(-50, index * 0.25)} viewport={{ once: true }} whileInView='visible' initial='hidden' className="w-56 hover:bg-indigo-500 hover:text-white transitions  py-3 px-5 h-full bg-dark rounded-sm" key={index}>
                        <h4 className='font-bold text-green'>{data.name}</h4>
                        <div className="mt-2">
                            <p className='text-sm '>{data.value}</p>
                        </div>
                    </motion.div>
                ))
                }
            </div>
        </div>
    )
}
