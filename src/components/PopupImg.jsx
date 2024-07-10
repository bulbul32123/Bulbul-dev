import React from 'react'
import Img from './Img'

export const PopupImg = ({ src, alt, className }) => {
    return (
        <Img src={src} alt={alt} className={className} />
    )
}
