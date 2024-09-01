import React from 'react';
import { PopupImg } from '../PopupImg';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../utils/motion';
import { texts } from '../utils';
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section className="text-gray-400 bg-dark2 body-font  relative z-[2] overflow-hidden py-32" id='about'>
      <PopupImg src='/images/React.png' className='-rotate-45 top-5 -right-14 blur-sm absolute z-10 h-40 w-40' />
      <motion.div variants={slideInFromTop(50, 1)} viewport={{ once: true }} whileInView='visible' initial='hidden' className="w-full container mx-auto pl-5 relative z-[20]">
        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white">Who am I</h1>
        <div className="h-1.5 w-28 bg-green rounded" />
      </motion.div>
      <div className="container mx-auto flex  md:flex-row flex-col  relative z-[20]">
        <div className="lg:flex-grow pr-8 pl-8  md:pr-28  md:pl-28  flex flex-col md:text-left justify-center items-center text-center pt-5">
          <motion.h1 variants={slideInFromTop(50, 0)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">I'm Bulbul Islam</motion.h1>
          {texts.map((text, index) => (
            <motion.p variants={slideInFromTop(50, index * 0.25)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="mb-2 leading-relaxed text-center md:text-base text-gray-light max-w-[45rem]" key={index}>{text.texts}</motion.p>
          ))
          }
          <div className="flex justify-center max-sm:flex-col gap-3 mt-3 mb-4">
            <motion.a target='_blank' href="/Bulbul'sResume.pdf" viewport={{ once: true }} variants={slideInFromLeft(-50, 0.8)} whileInView='visible' initial='hidden' className="sm:inline-flex text-black bg-green border-0 py-2 px-6 focus:outline-none transitions hover:text-white hover:bg-indigo-600 rounded text-lg">Resume</motion.a>
            <Link to='projects' spy={true} smooth={true} offset={0} duration={900}>
              <motion.button variants={slideInFromLeft(-50, 0.6)} viewport={{ once: true }} whileInView='visible' initial='hidden' className="md:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">View Projects</motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute z-[5] -top-40">
        <div className="w-full scale-[2] h-[900px] z-[4] -top-24 md:top-16 max-md:-left-7 md:-right-28 opacity-30 absolute flex items-center justify-center">
          <video src="/images/blackhole.webm" className='w-full h-full' preload='false'
            playsInline
            loop
            muted
            autoPlay

          />
        </div>
      </div>

    </section>
  );
};

export default About;

