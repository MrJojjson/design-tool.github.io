import { useNavigate } from '@reach/router';
import React from 'react';
import { Button } from '../../components/atoms/button';
import { Text } from '../../components/atoms/text';

import './signupsection.style.scss';

export const SignUpSection = () => {
    return (
        <section className="signup-section">
            <Text fontSize="l" theme="secondary">
                A heading!
            </Text>

            <Text theme="secondary">Some text that explains why someone should sign up!</Text>
            <Button label="Sign up" theme="highlight" onClick={() => {}} />
        </section>
    );
};
