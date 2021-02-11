import React from 'react';
import { Button } from '../../components/atoms/button';
import { Link } from '../../components/atoms/link';
import { Text } from '../../components/atoms/text';
import './navbar.style.scss';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <Text tag="h1" fontSize="l">
                    Poletas
                </Text>
            </Link>
            <div className="links">
                <Link to="/product" title="Product" />
                <Link to="/features" title="Features" />
                <Link to="/pricing" title="Pricing" />
            </div>
            <div className="profile">
                <Link to="/login" title="Login " />
                <Link fontSize="l" to="/signup" title="Sign up " />
            </div>
        </nav>
    );
};
