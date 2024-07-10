import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills } from '../utils';
import { SkillProgressBar } from './SkillsProgress';
import Img from '../Img';

export default function SkillsDetails() {
  return (
    <>
      <div className="z-10 overflow-hidden mb-20">
        <h1 className='text-white font-extrabold   text-xl md:text-3xl mb-5 text-center uppercase'>Journey of my life in front end Development</h1>
        <VerticalTimeline>
          {skills?.map((skills, index) => (
            <SkillsItems skills={skills} key={index} />
          ))

          }
        </VerticalTimeline>
      </div>
    </>
  )

}


const SkillsItems = ({ skills }) => {
  return (
    <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #232631' }} iconStyle={{ background: skills.iconBg }} icon={<div className='flex justify-center items-center h-full w-full'>
      <Img src={skills?.icon} alt={skills.title} className='w-10 h-10 object-contain imgSelect' />
    </div>}>
      <div className="">
        <h3 className='text-white text-[24px] font-bold'>{skills.title}</h3>
        <p className='text-gray-300 text-sm'>{skills.points}</p>
        {skills.progressValue ? (

          <SkillProgressBar progress={skills.progressValue} />
        ) : (
          <p>In Progress (Learning)</p>
        )
        }
      </div>
    </VerticalTimelineElement>
  )
}