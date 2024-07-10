import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Img from '../Img';
import { motion } from 'framer-motion';
import { opacity, slideInFromLeft } from '../utils/motion';
import Accordian, { AccordianItem } from './Accordion';

export default function Learning() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])


  return (
    <div className='w-full h-full mb-40 relative'>
      <motion.button variants={slideInFromLeft(-70, 0.7)} whileInView='visible' initial='hidden' viewport={{ once: true }} className=' absolute top-6 left-5'>
        <Link to='/' className="py-2 mt-4 inline-flex gap-2 items-center px-4 rounded-2xl text-white bg-green"><span className='rotate-180'><FaArrowRight /></span> Go Home</Link>
      </motion.button>
      <motion.div variants={opacity(0.9)} whileInView='visible' initial='hidden' viewport={{ once: true }} >
        <Img src="/images/dailycover.png" alt="Banner" className='w-full h-[500px] rounded-md object-cover object-center select-none pointer-events-none' />
      </motion.div>
      <div className="flex flex-col  my-7 md:pl-20 md:pr-20">
        <motion.h1 variants={slideInFromLeft(-70, 0.5)} whileInView='visible' initial='hidden' viewport={{ once: true }} className='text-white font-semibold mb-3  text-2xl md:text-5xl'>Daily Learning 🥰</motion.h1>
        <div className="text-white sm:text-base text-sm md:text-lg mb-5 ">
          <p>As a passionate frontend developer, I have recently embarked on an exciting journey to expand my skill set by diving into backend development. Currently, I am focusing on mastering <strong className='text-green'>Node.js, Express.js, and MongoDB</strong>. My goal is to become a <strong className='text-green'>full-stack developer</strong>, capable of handling both client-side and server-side development with proficiency.</p>
        </div>
        <div className="w-full h-full">
          <Accordian>
            <AccordianItem trigger="What is Daily Learning?" value={1} date='7 July 2024 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, corporis. Dolores totam repudiandae laboriosam ullam sed facere, fugiat eaque consequatur. Consequuntur iure impedit recusandae ab dignissimos architecto totam dolor deserunt!
            </AccordianItem>
            <AccordianItem trigger="What is Monthly Learning?" value={2} date='7 July 2024 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, corporis. Dolores totam repudiandae laboriosam ullam sed facere, fugiat eaque consequatur. Consequuntur iure impedit recusandae ab dignissimos architecto totam dolor deserunt!
            </AccordianItem>
            <AccordianItem trigger="What is Weekly Learning?" value={3} date='7 July 2024 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, corporis. Dolores totam repudiandae laboriosam ullam sed facere, fugiat eaque consequatur. Consequuntur iure impedit recusandae ab dignissimos architecto totam dolor deserunt!
            </AccordianItem>
          </Accordian>
        </div>
      </div>
    </div>
  )
}
