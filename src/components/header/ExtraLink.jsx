import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../utils/motion';
import { Link } from 'react-router-dom';
import { FaBookReader } from "react-icons/fa"

export default function ExtraLink({ isMobile }) {
    return (
        <>
            {!isMobile ? (

                <motion.div variants={slideInFromLeft(-50, 5 * 0.25)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="flex ">
                    <Link to='/dailylearning' className='mx-1 cursor-pointer '
                    >
                        Learning
                    </Link>
                </motion.div>
            ) : (
                <motion.div variants={slideInFromLeft(50, 6 * 0.25)} whileInView='visible' initial='hidden' viewport={{ once: true }} className='bg-dark text-white p-3 rounded-md flexCenter flex-col'>
                    <Link to='/dailylearning' className="w-full h-full flexCenter flex-col cursor-pointer">
                            <span><FaBookReader size={18} /></span>
                        <p className='text-xs select-none'>Learning</p>
                    </Link>
                </motion.div>
            )
            }
        </>
    )
}
