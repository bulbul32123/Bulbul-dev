import React, { useContext } from 'react'
import Img from '../Img';
import { motion } from 'framer-motion'
import { opacity } from '../utils/motion';
import { IoCloseSharp } from 'react-icons/io5';
import { Contexts } from '../../context/ContextApi';

export default function PreviewImage({ imgurl }) {
    const {setImgUrl} = useContext(Contexts)
    return (
        <>
            <motion.div  onClick={() =>setImgUrl({
                     isOpenPreviewImage: false
                })} variants={opacity(0.4)} whileInView='visible' initial='hidden' viewport={{ once: true }} className=" text-black p-2 bg-green rounded-full fixed z-[71] top-2 right-2">
                <span><IoCloseSharp size={25} /></span>
            </motion.div>
            <motion.div variants={opacity(0.2)} whileInView='visible' initial='hidden' viewport={{ once: true }}  className='h-screen w-full bg-black/70 fixed z-[70] top-0 px-10 pt-5' onClick={() =>setImgUrl({
                     isOpenPreviewImage: false
                })}>
                <Img src={imgurl.imgUrl} className='w-full h-full imgObject imgSelectNone' />
            </motion.div>
        </>
    )
}
