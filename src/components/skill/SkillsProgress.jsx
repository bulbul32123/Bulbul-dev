import React from 'react';
import { motion } from 'framer-motion'
const SkillProgress = ({ progress }) => {
  return (
    <div className="">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div className=''>
            <span className="text-xs text-right  font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-[#42b821]">
              {progress}%
            </span>
          </div>
        </div>
        <div  className="flex h-2 overflow-hidden text-xs bg-white rounded-full">
          <motion.div initial={{width: 0,}} whileInView={{width: `${progress}%`, opacity: 1}} transition={{
            duration:0.4,
          }} viewport={{ once: true }}  style={{ width: `${progress}%` }} className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#00ff11]"></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;


function SkillProgressBar({ progress }) {
  return (
    <div className="App p-4">
      <SkillProgress  progress={progress} />
    </div>
  );
}

export { SkillProgressBar}
