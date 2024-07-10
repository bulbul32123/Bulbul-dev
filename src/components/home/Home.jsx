import React from 'react';
import Navbar from '../header/Navbar';
import About from '../about/About';
import Skill from '../skill/Skill';
import Project from '../projects/Projects';
import Hero from './Hero';
import Offer from '../offer/Offer';
import SkillsDetails from '../skill/SkillsDetails';
import Services from '../service/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Offer />
      <SkillsDetails />
      <Project />
      <Services />
      <Offer />
    </>
  )
}
