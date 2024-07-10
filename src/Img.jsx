import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Img({ alt, className, src,height, width }) {
    return (
        <>
            <LazyLoadImage
                alt={alt}
                height={height || 100}
                src={src}
                width={width || 100}
                className={className}
                effect='blur'
            />
        </>
    )
}
