import React from 'react';
import { Button } from '../../components/atoms/button';
import { Link } from '../../components/atoms/link';
import './navbar.style.scss';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="content"></div>
            <div className="profile">
                <Link to="/register" title="Register " theme="secondary" />
                <Link to="/login" title="Login " theme="secondary" />
                <Button label="Button" onClick={() => {}} />
                <Button label="Button" onClick={() => {}} theme="secondary" />
            </div>
        </nav>
    );
};
