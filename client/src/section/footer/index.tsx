import React from 'react';
import { Button } from '../../components/atoms/button';
import { Link } from '../../components/atoms/link';
import { Text } from '../../components/atoms/text';
import './footer.style.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <Text tag="h3" fontSize="s" className="title">
                What we offer
            </Text>
            <Text tag="h3" fontSize="s" className="title">
                About poletas
            </Text>
            <Text tag="h3" fontSize="s" className="title">
                Profile
            </Text>
            <ul>
                <li>
                    <Link to="/product" title="Product" />
                </li>
                <li>
                    <Link to="/features" title="Features" />
                </li>
                <li>
                    <Link to="/pricing" title="Pricing" />
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/about" title="About" />
                </li>
                <li>
                    <Link to="/idea" title="The idea behind poletas" />
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/login" title="Login" />
                </li>
                <li>
                    <Link to="/signup" title="Sign up" />
                </li>
            </ul>
        </div>
    );
};
