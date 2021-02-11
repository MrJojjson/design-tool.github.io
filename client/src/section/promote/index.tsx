import { useNavigate } from '@reach/router';
import React from 'react';
import { Button } from '../../components/atoms/button';
import { Image, ImageType } from '../../components/atoms/image';
import { Text } from '../../components/atoms/text';

import './promote.style.scss';

type PromoteType = {
    title: string;
    image: ImageType;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};

export const Promote = ({ title, image, direction = 'column' }: PromoteType) => {
    return (
        <section className={`promote ${direction}`}>
            <Text className="promote-title" tag="h3" fontSize="l" theme="primary">
                {title}
            </Text>
            <Image {...image} />
        </section>
    );
};
