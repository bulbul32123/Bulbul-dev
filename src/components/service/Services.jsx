import React from 'react'
import TextPart from '../TextPart'
import { service } from '../utils'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../utils/motion'

export default function Services() {
    return (
        <section className="text-gray-400 bg-black body-font mb-10 overflow-hidden" id='service'>
            <div className="container px-5  py-24 mx-auto">
                <TextPart title='Services' />
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                    {service.map((service,index) => (
                        <motion.div initial='hidden'
                            variants={slideInFromLeft(-50, (index / 1.5 * 0.25))}
                            whileInView='visible'
                            transition={{ delay: (index / 1.5 * 0.25), duration: 0.4 }} viewport={{ once: true }} className="p-4 md:w-1/3 flex flex-col text-center items-center" key={index}>
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                                <img src={service.icons} alt={service.name} />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">{service.name}</h2>
                                <p className="leading-relaxed text-sm">{service.des}</p>
                            </div>
                        </motion.div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
