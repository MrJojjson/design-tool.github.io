import React from 'react';
import { useProgressiveImg } from '../../../hooks/useProgressiveImg';
import './image.style.scss';

export type ImageType = {
    src: string;
    lowResSrc: string;
    alt: string;
    aspectRatio?: '30-9' | '21-9' | '16-9' | '3-2';
    className?: string;
    highlight?: number;
};

export const Image: React.FC<ImageType> = ({
    className = '',
    aspectRatio = '21-9',
    src,
    lowResSrc,
    highlight = 50,
    ...rest
}) => {
    const { newSrc, blur } = useProgressiveImg({ lowQualitySrc: lowResSrc, highQualitySrc: src });

    return (
        <figure className={`image ${blur ? 'blur' : 'no-blur'} aspect-ratio--${aspectRatio}  ${className}`}>
            <img
                src={newSrc}
                style={{ top: `${highlight}%`, transform: `translateY(-${highlight}%)` }}
                className={`${highlight}`}
                {...rest}
            />
        </figure>
    );
};
