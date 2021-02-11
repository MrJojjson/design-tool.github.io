import { useNavigate } from '@reach/router';
import React from 'react';
import { Button } from '../../components/atoms/button';
import { Image, ImageType } from '../../components/atoms/image';
import { Text } from '../../components/atoms/text';

import './hero.style.scss';

type HeroType = {
    title: string;
    image: ImageType;
};

export const Hero = ({ title, image }: HeroType) => {
    return (
        <section className="hero">
            <Image {...image} />

            <Text className="hero-title" tag="h1" fontSize="l" theme="secondary">
                {title}
            </Text>
        </section>
    );
};
