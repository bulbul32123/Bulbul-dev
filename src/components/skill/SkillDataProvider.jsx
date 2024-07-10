import { motion } from 'framer-motion';
import React from 'react';
import Img from '../Img';
import { slideInFromLeft } from '../utils/motion';

export default function SkillDataProvider({ src, width, height, index, skill_name }) {
    return (
        <>
            <motion.div initial='hidden'
                variants={slideInFromLeft(10, index/2 * 0.25)}
                whileInView='visible'
                transition={{ delay: index/2 * 0.3, duration: 0.4 }} viewport={{ once: true }} className='transitions hover:scale-125'
            >
                <Img
                    src={src}
                    width={width}
                    height={height}
                    className='imgSelectNone'

                    alt={skill_name}
                />
            </motion.div>
        </>
    )
}
