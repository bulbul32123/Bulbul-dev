import React from 'react'

export default function SkillText() {
    return (
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white">Skill</h1>
            <div className="h-1 w-20 bg-green rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Explore my <strong className='text-green'>Projects</strong>. Below are brief <br /> descriptions of some of my notable Project.</p>
        </div>
    )
}
