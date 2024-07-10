import React  from 'react';
import User from '/images/Bulbulislam.png'
import { motion } from 'framer-motion'
import { opacity } from '../utils/motion';
import Wave from '../Wave';
import MainComponents from './MainComponents';
import { Geomatry } from '../geomatry/Geomatry';

export default function Hero() {
  return (
    <>
      <div className='flexCenter flex-col-reverse sm:flex-row pt-20  overflow-hidden transitions  relative pb-12 bg-dark w-full pl-5' id='home'>
        <MainComponents />
        <Geomatry className="h-[460px] rounded-full w-[450px] absolute top-10 z-0 right-80 bg-dark2 opacity-35" delay='0.4' />
        <div className="h_w-full  max-sm:flexCenter relative z-10  md:-mt-24">
          <div className="absolute h-screen w-full bg-green z-0 -mt-28 sm:inline hidden"></div>
          <div>
            <motion.img variants={opacity(1.8)} whileInView='visible' initial='hidden' viewport={{ once: true }} src={User} alt="Bulbul" className=' z-10 relative rounded-full sm:rounded-none  drop-shadow-2xl border-white border-2 sm:border-none imgSelectNone imgObject  h-[250px] max-sm:w-[250px] sm:h-full pt-10 ' />
            <Geomatry className="h-10 w-10 border-[4px] border-white bg-transparent rounded-sm absolute bottom-56 left-5 rotate-12 opacity-65" delay='0.9' />
            <Geomatry className="h-10 w-10 rounded-full border-[4px] border-white bg-transparent absolute bottom-40 right-5 rotate-12 opacity-65" delay='1.2' />
          </div>
          <motion.img variants={opacity(1.6)} whileInView='visible' initial='hidden' viewport={{ once: true }} src="/images/Group.png" className='absolute -top-20 imgSelectNone z-0 opacity-50 -right-20 blur-[4px]' alt="HH" />
        </div>
        <Wave  />
      </div>
    </>
  )
}
