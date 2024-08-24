import React from 'react'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import TextPart from '../TextPart'
import { projectData } from '../utils'

export default function Projects() {
  return (
    <section className="container mx-auto  pl-2 pr-2 pt-20 overflow-hidden text-gray-400 body-font bg-dark2 pb-20" id='projects'>
      <div className=" pb-8 mx-auto">
        <TextPart title='Selected Projects' />
        <div className="flex max-md:justify-center max-md:items-center  flex-wrap -m-4">
          {projectData?.map((item, index) => (
            <ProjectCard index={index / 2} item={item} key={index} />
          ))

          }
        </div>
      </div>
    </section>
  )
}
