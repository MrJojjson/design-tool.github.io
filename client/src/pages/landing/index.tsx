import React from 'react';
import { Image } from '../../components/atoms/image';
import { Hero } from '../../section/hero';
import { Promote } from '../../section/promote';
import { Poke } from '../../section/poke';
export const Landing = () => {
    return (
        <>
            <Hero
                title="A heading that promotoes the content if user sign up!"
                image={{
                    src:
                        'https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=60',
                    lowResSrc:
                        'https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=1',
                    alt: '',
                }}
            />
            <Promote
                direction="column"
                title="A heading that promotoes the content if user sign up!"
                image={{
                    src:
                        'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
                    lowResSrc:
                        'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=1',
                    alt: 'An alt test',
                    aspectRatio: '21-9',
                    highlight: 75,
                }}
            />
            <Poke
                text="A title for a poke to the lovely user"
                link={{
                    to: '/signup',
                    title: 'that will help to sign up!',
                }}
                align="end"
            />
            <Promote
                direction="row"
                title="A heading that promotoes the content if user sign up!"
                image={{
                    src:
                        'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
                    lowResSrc:
                        'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=1',
                    alt: 'An alt test',
                    aspectRatio: '16-9',
                }}
            />
            <Promote
                direction="row-reverse"
                title="A heading that promotoes the content if user sign up!"
                image={{
                    src:
                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
                    lowResSrc:
                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=1',
                    alt: 'An alt test',
                    aspectRatio: '30-9',
                }}
            />
            <Poke
                text="A title for a poke to the lovely user"
                link={{
                    to: '/signup',
                    title: 'that will help to sign up!',
                }}
            />
        </>
    );
};
