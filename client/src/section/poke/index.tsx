import { useNavigate } from '@reach/router';
import React from 'react';
import { Button } from '../../components/atoms/button';
import { Link, LinkType } from '../../components/atoms/link';
import { Text } from '../../components/atoms/text';

import './poke.style.scss';

type PokeType = {
    title?: string;
    text?: string;
    link?: Pick<LinkType, 'title' | 'to'>;
    align?: 'start' | 'center' | 'end';
};

export const Poke = ({ title, text, link, align = 'start' }: PokeType) => {
    return (
        <section className={`poke ${align}`}>
            {title && (
                <Text className="poke-title" tag="h4" fontSize="l" theme="secondary">
                    {title}
                </Text>
            )}
            {text && (
                <Text className="poke-paragraph" fontSize="xl" theme="secondary">
                    {text}
                </Text>
            )}
            {link && <Link fontSize="xl" hyper="underline" theme="secondary" {...link} />}
        </section>
    );
};
