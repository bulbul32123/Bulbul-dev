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
            <AccordianItem trigger="History of Node.js 📖🔖" value={1} date='7 July 2024 '>
              The history of Node.js is fascinating! It all began in 2009, when Ryan Dahl created the first version of Node.js. He wanted to create a fast and lightweight runtime environment for JavaScript, and he chose to use the Google Chrome V8 JavaScript engine as the foundation for Node.js. The first release of Node.js was met with great enthusiasm by developers, and it quickly gained popularity as a platform for developing server-side applications.

              Since the first release of Node.js, there have been many exciting developments. One of the most notable was the release of the Node Package Manager (NPM) in 2010. NPM is a command-line interface that makes it easy to install and manage packages (i.e., reusable pieces of code) for Node.js applications. This made it much easier for developers to share and reuse code, and it helped to fuel the growth of the Node.js ecosystem. Another major development was the release of Node.js v0.12 in 2014, which introduced significant performance improvements.


            </AccordianItem>
            <AccordianItem trigger="Introduction to Node.js 😄" value={2} date='8 July 2024 '>
              Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
              Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
              A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
            </AccordianItem>
            <AccordianItem trigger="Node.js Modules" value={3} date='9 July 2024 '>
              Module in Node. js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node. js application.
            </AccordianItem>
          </Accordian>
        </div>
      </div>
    </div>
  )
}
