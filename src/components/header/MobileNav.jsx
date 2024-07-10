import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideInFromLeft } from '../utils/motion';
import { CgMenuGridR } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { Contexts } from '../../context/ContextApi';
import { Link } from 'react-scroll';
import { mobileNavLinks } from '../utils';
import ExtraLink from './ExtraLink';


export default function MobileNav() {
    const { isOpen, setOpen } = useContext(Contexts)
    return (
        <>
            <nav className={`fixed bottom-0 h-14 w-full sm:hidden transitions bg-dark2 text-white flexBetween z-50 pl-5 pr-5  ${isOpen ? 'hidden' : ''}`}>
                <motion.div variants={opacity(0.4)} whileInView='visible' initial='hidden' viewport={{ once: true }} className="text-black sm:mt-0 mt-2 pr-10">
                    <Link to='home' spy={true} smooth='true' offset={0} duration={900}
                        className='flexCenter select-none'
                    >
                        <div className="h-5 w-5 flexCenter my-5 rounded-sm bg-green text-black  p-2 font-extrabold mr-2">B</div>
                        <span className='font-bold !text-white'>Bulbul</span>
                    </Link>
                </motion.div>
                <motion.div variants={opacity(0.4)} whileInView='visible' initial='hidden' viewport={{ once: true }} className=" text-white">
                    <span className='' onClick={() => setOpen(true)}><CgMenuGridR size={20} /></span>
                </motion.div>
            </nav>


            <nav className={`fixed bottom-0 h-40 ${isOpen ? '' : 'translate-y-[500px]'} transitions w-full bg-dark2 text-black flexCenter z-50 pl-5 pr-5`}>
                <div className="grid grid-cols-3 gap-5">
                    {mobileNavLinks.map((data, idnex) => (
                        <motion.div variants={slideInFromLeft(50, idnex * 0.25)} whileInView='visible' initial='hidden' viewport={{ once: true }} className='bg-dark text-white p-3 rounded-md flexCenter flex-col' key={idnex}>
                            <Link to={data.path} smooth={true} offset={0} duration={950} className="w-full h-full flexCenter flex-col cursor-pointer">
                                <span>{data.icon}</span>
                                <p className='text-xs select-none'>{data.name}</p>
                            </Link>
                        </motion.div>
                    ))
                    }
                    <ExtraLink isMobile={true} />


                </div>
                <motion.div variants={opacity(0.4)} whileInView='visible' initial='hidden' viewport={{ once: true }} className=" text-white absolute bottom-5 right-4">
                    <span className='' onClick={() => setOpen(false)}><IoCloseSharp size={20} /></span>
                </motion.div>
            </nav>
        </>
    )
}
