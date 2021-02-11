import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { Landing } from './pages/landing';
import { Navbar } from './section/navbar';
import { Artboards } from './pages/panels/artboards';
import { Palette } from './pages/panels/palette';
import { SignUpSection } from './section/signup';
import { SignUp } from './pages/signup';
import { Login } from './pages/login';
import { Footer } from './section/footer';

const Route = (props: { component: JSX.Element } & RouteComponentProps) => props.component;

export const App = (): JSX.Element => {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <Router className="router">
                    <Route path="/" component={<Landing />} />
                    <Route path="/signup" component={<SignUp />} />
                    <Route path="/login" component={<Login />} />
                </Router>
            </div>
            <Footer />
        </div>
    );
};
