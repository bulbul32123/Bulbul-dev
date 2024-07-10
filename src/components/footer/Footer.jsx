import React from 'react';
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../utils/motion';
import { socialData } from '../utils';


export default function Footer() {
  return (
    <>
      <footer className="text-gray-400 bg-black max-sm:pb-14 body-font overflow-hidden">
        <div className="container px-5 py-4 mx-auto flex items-center md:flex-row flex-col">
          <motion.a variants={slideInFromLeft(-50, 0.2)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <div className="h-5 w-5 flexCenter my-5 rounded-sm bg-green text-black p-2 font-extrabold mr-2">B</div>
            <span className='font-bold'>Bulbul</span>
          </motion.a>
          <motion.p variants={slideInFromLeft(-50, 0.4)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="text-sm flex md:flex-row flex-col gap-1 text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-2">© 2024 - Present Bulbul —
            <span className="text-gray-500 ml-1">bulbulhero63@gmail.com </span>
          </motion.p>
          <span className="inline-flex md:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
            {socialData.map((data, index) => (
              <motion.a variants={slideInFromLeft(-50, index * 0.54)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="text-gray-400 flex gap-2" href={data.link} target='_blank' key={data.id}>
                <span>{data.icon}</span>
              </motion.a>
            ))
            }
          </span>
        </div>
      </footer>
    </>
  )
}
