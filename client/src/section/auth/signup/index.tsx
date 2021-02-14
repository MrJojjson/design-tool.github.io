import React, { useState } from 'react';
import { Text } from '../../../components/atoms/text';
import { Input } from '../../../components/atoms/input';
import { Button } from '../../../components/atoms/button';
import { Divider } from '../../../components/atoms/divider';
import { Link } from '../../../components/atoms/link';
import { userRegisterUserMutation } from '../../../hooks/useAuth';
import { REGISTER_USER } from '../../../api/authApi';
import { RegisterUserMutationType, RegisterUserType } from '../../../common/types/registerTypes';
import { ApolloCache, FetchResult } from '@apollo/client';

import '../auth.style.scss';

type SignupErrors = {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

export const SignUp = () => {
    const [user, setUser] = useState<RegisterUserType>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<SignupErrors>({});
    const { registerUser, data } = userRegisterUserMutation(REGISTER_USER);
    console.log('data', data);

    const handleRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerUser({
            variables: { ...user },
            update: (cache: ApolloCache<RegisterUserMutationType>, { data }: FetchResult<RegisterUserMutationType>) => {
                if (data) {
                    const { errors } = data.registerUser?.node;
                    setErrors(errors);
                }

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
    console.log('errors', errors);

    const setUserData = (currentTarget: EventTarget & HTMLInputElement) =>
        setUser({ ...user, [currentTarget.id]: currentTarget.value });

    const removeError = (field: keyof RegisterUserType) => setErrors({ ...errors, [field]: '' });

    return (
        <div className="signup">
            <div className="title">
                <Text tag="h2" fontSize="m">
                    Register new user for `Design Tool?`
                </Text>
            </div>
            <form className="form" noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleRegisterUser(e)}>
                <Input
                    onBlur={({ currentTarget }) => setUserData(currentTarget)}
                    onChange={() => errors?.name && removeError('name')}
                    label="Name"
                    placeholder="John Doe"
                    id="name"
                    type="text"
                    autoComplete="name"
                    error={errors?.name}
                />
                <Input
                    onBlur={({ currentTarget }) => setUserData(currentTarget)}
                    onChange={() => errors?.email && removeError('email')}
                    label="Email"
                    placeholder="abc@abc.com"
                    id="email"
                    type="email"
                    autoComplete="email"
                    error={errors?.email}
                />
                <Input
                    onBlur={({ currentTarget }) => setUserData(currentTarget)}
                    onChange={() => errors?.password && removeError('password')}
                    label="Password"
                    placeholder="One password to rule them all"
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    error={errors?.password}
                />
                <Input
                    onBlur={({ currentTarget }) => setUserData(currentTarget)}
                    onChange={() => errors?.confirmPassword && removeError('confirmPassword')}
                    label="Confirm Password"
                    placeholder="Confirm password"
                    id="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    error={errors?.confirmPassword}
                />
                <Button label="Sign up" onClick={() => {}} type="submit" theme="secondary" />
            </form>
            <div className="navigation">
                <Divider text="OR" />
                <Link to="/login" title="Login to existing account" fontSize="l" />
            </div>
        </div>
    );
};
