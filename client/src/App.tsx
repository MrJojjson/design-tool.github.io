import { RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import { Landing } from './pages/landing';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import { Footer } from './section/footer';
import { Navbar } from './section/navbar';

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
