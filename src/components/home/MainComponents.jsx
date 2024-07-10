import React from 'react';
import { opacity, slideInFromLeft } from '../utils/motion';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { PopupImg } from '../PopupImg';
import { socialData } from '../utils';

export default function MainComponents() {
  return (
    <>
      <div className="relative z-[20] pb-20 w-full" >
        <PopupImg src="/images/Group.png" alt="Circle" className='absolute md:visible hidden  -left-24 opacity-50 h-72 w-72 imgSelectNone -bottom-36' />
        <div className=" text-white relative  h_w-full z-20 sm:block flexCenter flex-col">
          <motion.h1 variants={slideInFromLeft(-50, 1.1)} whileInView='visible' initial='hidden' viewport={{ once: true }} className='mb-2 text-[25px] sm:text-[30px] md:text-[40px]  lg:text-[45px] leading-10
             sm:leading-[30px] md:leading-[45px] lg:leading-[60px] max-sm:text-center font-bold'>Turning Vision Into Reality With <span className='text-green selection:text-light tex'> Code And Design.</span></motion.h1>
          <motion.div variants={opacity(1.3)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="sm:pr-20 w-full sm:mt-3 mb-4">
            <p className='text-[10px] xl:text-xl md:text-sm max-sm:px-12 max-sm:text-center font-light  text-gray '>As a <strong className='text-green font-normal'>Front end developer</strong> with knowledge in web development and desigs. I'm a passionate frontend developer dedicated to <strong className='text-green font-normal'>crafting immersive digital experiences</strong> that captivate and inspire.</p>
          </motion.div>
          <div className="flex items-center max-sm:flex-col">
            <Link to='about' spy={true} smooth={true} offset={0} duration={900}><motion.button variants={opacity(1.5)} whileInView='visible' initial='hidden' viewport={{ once: true }} className='bg-green hover:bg-dark2 inline-block cursor-pointer  hover:text-light transitions text-[10px]  font-medium md:text-sm  rounded-sm py-2 px-4'>
              EXPLORE ME
            </motion.button>
            </Link>
            <span className="inline-flex pl-4 gap-1">
              {socialData.map((data, index) => (
                <motion.a variants={slideInFromLeft(-50, index * 0.54)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="text-gray-400 hover:bg-black rounded-full p-2 flex" href={data.link} target='_blank' key={data.id}>
                  <span>{data.icon}</span>
                </motion.a>
              ))
              }
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
