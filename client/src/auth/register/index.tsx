import React, { useState } from 'react';
import { Text } from '../../components/atoms/text';
import { Input } from '../../components/atoms/input';
import { Button } from '../../components/atoms/button';
import { Divider } from '../../components/atoms/divider';
import { Link } from '../../components/atoms/link';
import { userRegisterUserMutation } from '../../hooks/useRegisterUser';
import { REGISTER_USER } from '../../api/authApi';
import { RegisterUserMutationType } from '../../common/types/registerTypes';
import { ApolloCache, FetchResult } from '@apollo/client';

import '../auth.style.scss';

type RegisterErrors = {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

export const Register = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<RegisterErrors>({});
    const [registerUser] = userRegisterUserMutation(REGISTER_USER);

    const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerUser({
            variables: { name, email, password, confirmPassword },
            update: (
                cache: ApolloCache<RegisterUserMutationType>,
                { data: { registerUser } }: FetchResult<RegisterUserMutationType>,
            ) => {
                console.log('registerUser', registerUser);

                // const cacheData = cache.readQuery({ query: GET_TODOS }) as ITodos;
                // cache.writeQuery({
                //   query: GET_TODOS,
                //   data: {
                //     getTodos: [...cacheData.getTodos, addTodo]
                //   }
                // });
            },
        });
    };

    return (
        <div className="register">
            <div className="title">
                <Text tag="h2" fontSize="m">
                    Register new user for `Design Tool?`
                </Text>
            </div>
            <form className="form" noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleRegisterUser(e)}>
                <Input
                    onChange={({ currentTarget }) => setName(currentTarget.value)}
                    label="Name"
                    placeholder="John Doe"
                    id="name"
                    type="text"
                    autoComplete="name"
                    error="No name added"
                />
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
                <Input
                    onChange={({ currentTarget }) => setConfirmPassword(currentTarget.value)}
                    label="Confirm Password"
                    placeholder="Confirm password"
                    id="confirmpassword"
                    type="password"
                    autoComplete="new-password"
                />
                <Button label="Register" onClick={() => {}} type="submit" theme="secondary" />
            </form>
            <div className="navigation">
                <Divider width="30vw" text="OR" />
                <Link to="/login" title="Login to existing account" fontSize="l" />
            </div>
        </div>
    );
};
