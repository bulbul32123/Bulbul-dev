import React, { useContext } from 'react';
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import Img from '../Img';
import { Contexts } from '../../context/ContextApi';

const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

export default function ProjectCard({ index, item }) {
    const { setImgUrl } = useContext(Contexts)

    const OpenPreviewImage = (url) => {
        setImgUrl({
            imgUrl: url,
            isOpenPreviewImage: true
        });
    }
    return (
        <>
            <motion.div initial='hidden'
                variants={imageVariants}
                whileInView='visible'
                transition={{ delay: index * 0.3, duration: 0.4 }} viewport={{ once: true }} className="xl:w-1/4 md:w-1/2 p-4 md:p-1">
                <Tilt options={{
                    max: 45,
                    scale: 1,
                    transition: true,
                    speed: 450,
                }}>

                    <div className="bg-gray-700 bg-opacity-40 p-6  rounded-lg">
                        <div className="imghoverdiv relative transitions">
                            <Img className="h-40 w-full rounded-sm relative imgObject mb-6" src={item.imgSrc} alt="content" />
                            <div className="absolute z-[-1] top-0 transitions  bg-black/50 w-full h-40 hiddendiv">
                                <div className="flexCenter h_w-full gap-5">
                                    <a href={item.link} target='_blank' className='md:hover:text-white text-white transitions md:text-gray-400 rounded-sm text-sm py-1.5 px-2.5'><TbExternalLink size={25} /></a>
                                    {item.gitLink && <a href={item.gitLink} className='md:hover:text-white text-white md:text-gray-400'><FaGithub size={25} /></a>}
                                    <span className='md:hover:text-white text-white md:text-gray-400' onClick={() => OpenPreviewImage(item.imgSrc)}><IoEye size={25} /></span>
                                </div>
                            </div>

                        </div>
                        <h3 className="tracking-widest text-gray-400 text-sm md:text-xs font-medium title-font uppercase">{item.category + ' Website'}</h3>
                        <h2 className="md:text-lg text-base text-white font-medium title-font mb-2">{item.title} </h2>
                        <p className="leading-relaxed text-gray-400 text-sm md:text-base">{(item.desc).length > 70 ? (item.desc).slice(0, 70) + '...' : item.desc}</p>
                    </div>
                </Tilt>
            </motion.div>
        </>
    )
}
