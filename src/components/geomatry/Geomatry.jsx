import React from 'react';
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../utils/motion';

export const Geomatry = ({ className,delay }) => {
  return (
    <>
      <motion.div initial='hidden'
        variants={slideInFromLeft(50, delay)}
        whileInView='visible' viewport={{ once: true }}
        transition={{ delay: delay , duration: 0.4 }} className={className} />
    </>
  )
}
