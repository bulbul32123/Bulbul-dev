import React from 'react'

export default function Container({ children }) {
  return (
    <div className='relative w-full h-full 2xl:max-w-[1600px]'>
      {children}
    </div>
  )
}
