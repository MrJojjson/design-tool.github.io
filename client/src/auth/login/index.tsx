import React, { useState } from 'react';
import { Button } from '../../components/atoms/button';
import { Divider } from '../../components/atoms/divider';
import { Input } from '../../components/atoms/input';
import { Link } from '../../components/atoms/link';
import { Text } from '../../components/atoms/text';
import '../auth.style.scss';

type LoginErrors = {
    email?: string;
    password?: string;
};

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<LoginErrors>({});

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        console.log(userData);
    };
    return (
        <div className="login">
            <div className="title">
                <Text tag="h2" fontSize="m">
                    Sign in to `Design Tool?`
                </Text>
            </div>
            <form className="form" noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
                <Input
                    onChange={({ currentTarget }) => setEmail(currentTarget.value)}
                    label="Email"
                    placeholder="abc@abc.com"
                    id="email"
                    type="email"
                    autoComplete="email"
                />
                <Input
                    onChange={({ currentTarget }) => setPassword(currentTarget.value)}
                    label="Password"
                    placeholder="One password to rule them all"
                    id="password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button label="Login" onClick={() => {}} type="submit" theme="secondary" />
            </form>
            <div className="navigation">
                <Divider width="30vw" text="OR" />
                <Link to="/register" title="Register an account" fontSize="l" />
            </div>
        </div>
    );
};
