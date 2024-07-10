import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser' 
import {  slideInFromTop } from '../utils/motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const  handleSubmit = async(e) => {
    e.preventDefault();
    setSending(true)
    const serviceId = 'service_15bgvzo'
    const templateId = 'template_qf25nxq'
    const publicKey = 'WHpVlCmKFoojCJ7eT'
    
    const templateparams = {
      from_name:name,
      from_email:email,
      to_name: 'Bulbul islam',
      message: message,
    }
    await emailjs.send(serviceId, templateId, templateparams,publicKey).then((res)=>{
      setSending(false)
      setName('')
      setMessage('')
      setEmail('')
      alert("Your Message has been sent successfully.")
    }).catch((error)=>{
      console.error('Error sending email ', error);
      alert("Something is Wrong??")
    })
  };
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative" id='contact'>
        <div className="absolute inset-0 bg-gray-900">
          <iframe title="map" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.073134790141!2d90.41760907468132!3d23.780409887624824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79a27d665a3%3A0x1f85a83218e0b92c!2sGulshan%20Lake!5e0!3m2!1sen!2sbd!4v1712235536184!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='opacity-40'></iframe>
        </div>
        <motion.div initial='hidden'
          variants={slideInFromTop(100, 0.25)}
          whileInView='visible'
          transition={{ delay: 0.3, duration: 0.4 }} viewport={{ once: true }} className="container px-5 py-24 mx-auto flex">
          <form onSubmit={handleSubmit}  className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-white text-2xl mb-1 font-medium title-font">Let's Talk</h2>
            <p className="leading-relaxed mb-5">I will read all emails. Send me any message you want and i'll get back to you. </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} autoComplete='false' className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Name' />
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='false' className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Email' />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea  value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green focus:ring-2 focus:ring-green h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Message'></textarea>
            </div>
            <button className="text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-dark2 rounded text-lg">{sending ? 'Sending Message...' : 'Send Message'}</button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">You won't receive anything other than your reply.</p>
          </form>
        </motion.div>
      </section>
    </>
  )
}
