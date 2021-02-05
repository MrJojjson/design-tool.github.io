import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { Landing } from './layout/landing';
import { Navbar } from './layout/navbar';
import { Artboards } from './layout/panels/artboards';
import { Palette } from './layout/panels/palette';
import { Register } from './auth/register';
import { Login } from './auth/login';

const Route = (props: { component: JSX.Element } & RouteComponentProps) => props.component;

export const App = (): JSX.Element => {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Route path="/" component={<Landing />} />
                <Route path="/register" component={<Register />} />
                <Route path="/login" component={<Login />} />
            </Router>
        </div>
    );
};
