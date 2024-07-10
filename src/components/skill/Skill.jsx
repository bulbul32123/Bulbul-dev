import React from 'react';
import { MainSkills, OtherSkills, SubSkills } from '../utils/index';
import SkillDataProvider from './SkillDataProvider';
import Img from '../Img';
import { motion } from 'framer-motion'
import TextPart from '../TextPart';
import { slideInFromLeft } from '../utils/motion';
import { PopupImg } from '../PopupImg';

export default function Skill() {
  const skillArray = [MainSkills, SubSkills, OtherSkills]
  return (
    <>
      <section className='flexCenter flex-col bg-dark2 gap-3 h-full relative overflow-hidden pb-40 container mx-auto pl-5 pt-20' id='skills'>
      <PopupImg src='/images/figma.png' className='rotate-45 bottom-0 -left-14 blur-sm absolute z-10 h-52 w-52' />
        <TextPart title='Skills' />
        <div className="relative z-[10] ">
          {skillArray.map((text, index) => (
            <div className="flexCenter flex-row  flex-wrap gap-5" key={index}>
              {
                text?.map((image, index) => {
                  return <SkillDataProvider src={image?.Image} index={index} key={index} width={image?.width} height={image?.height} skill_name={image.skill_name} />
                })
              }
            </div>
          ))}

          <motion.div variants={slideInFromLeft(10, 0.6)} whileInView='visible' initial='hidden' className="flexCenter  flex-wrap gap-5 " viewport={{ once: true }}>
            <Img src='/images/github.png' height={80} width={80} className='transitions hover:scale-125' />
          </motion.div>
        </div>
        <div className="w-full h-full absolute max-sm:hidden">
          <div className="w-full h-full z-[4] opacity-30 absolute flexCenter">
            <video src="/images/cards-video.webm" className='w-full h-full' preload='false'
              playsInline
              loop
              muted
              autoPlay

            />
          </div>
        </div>
      </section>
    </>
  )
}
