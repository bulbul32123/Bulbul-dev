import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { opacity, slideInFromLeft } from '../utils/motion';
import MobileNav from './MobileNav';
import { links } from '../utils';
import ExtraLink from './extraLink';

export default function Navbar() {


  const hitMeUpButton = (
    <motion.button variants={slideInFromLeft(-20, 1.5)} initial='hidden' animate='visible' id="btn" className='text-white xl:px-4 xl:py-3 md:text-base text-sm px-4 py-2 '>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Let's Talk
    </motion.button>
  );

  return (
    <>
      <nav className={`flex show justify-between max-sm:hidden sm:items-center sticky  z-50 h-20 transition-all duration-300 ease-in-out top-0 left-0 overflow-hidden w-full bg-transparent pl-5 pr-5`}>
        <motion.div variants={opacity(0.5)} whileInView='visible' initial='hidden' viewport={{ once: true }} className={`text-white select-none  font-bold flex gap-3`}>
          {links.map((link, index) => (
            <motion.div variants={slideInFromLeft(-50, index * 0.25)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="flex " key={index}>
              <Link to={link.label} key={link.id} spy={true} smooth='true' offset={0} duration={900} className='mx-1 cursor-pointer ' id='navbarlink'
              >
                {link.name}
              </Link>
            </motion.div>
          ))
          }
        <ExtraLink />
        </motion.div>
        <motion.div variants={slideInFromLeft(-50, 1)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="text-white sm:mt-0 mt-2 pr-10 ">
          <Link to='home' spy={true} smooth='true' offset={0} duration={900} 
            className='flexCenter select-none'
          >
            <div className="h-5 w-5 flexCenter my-5 rounded-sm bg-green text-black  p-2 font-extrabold mr-2">B</div>
            <span className='font-bold !text-white'>Bulbul</span>
          </Link>
        </motion.div>
        <motion.div variants={slideInFromLeft(-50, 1.5)} whileInView='visible' initial='hidden' viewport={{ once: true }} className={`text-white`}>
          <div className="flex justify-center items-center sm:flex-row flex-col">
            <div className="mr-5 hidden sm:inline ">
              <Link smooth={true} offset={0} duration={950} to="contact" >{hitMeUpButton}</Link>
            </div>
          </div>
        </motion.div>
      </nav>
      <MobileNav />
    </>
  )
}
