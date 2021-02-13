import { ApolloCache, FetchResult } from '@apollo/client';
import React, { useState } from 'react';
import { LOGIN_USER } from '../../../api/authApi';
import { Button } from '../../../components/atoms/button';
import { Divider } from '../../../components/atoms/divider';
import { Input } from '../../../components/atoms/input';
import { Link } from '../../../components/atoms/link';
import { Text } from '../../../components/atoms/text';
import { userLoginUserMutation } from '../../../hooks/useAuth';
import { LoginUserMutationType, LoginUserType } from '../../../common/types/loginType';

import '../auth.style.scss';

type LoginErrors = {
    email?: string;
    password?: string;
};

export const Login = () => {
    const [user, setUser] = useState<Pick<LoginUserType, 'email' | 'password'>>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<LoginErrors>({});
    const [loginUser] = userLoginUserMutation(LOGIN_USER);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUser({
            variables: { ...user },
            update: (cache: ApolloCache<LoginUserMutationType>, { data }: FetchResult<LoginUserMutationType>) => {
                console.log('hj');

                if (data) {
                    const { errors } = data.loginUser?.node;
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

    const setUserData = (currentTarget: EventTarget & HTMLInputElement) =>
        setUser({ ...user, [currentTarget.id]: currentTarget.value });
    console.log('user', user);

    const removeError = (field: keyof LoginUserType) => setErrors({ ...errors, [field]: '' });

    return (
        <div className="login">
            <div className="title">
                <Text tag="h2" fontSize="m">
                    Sign in to `Design Tool?`
                </Text>
            </div>
            <form className="form" noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
                <Input
                    onBlur={({ currentTarget }) => setUserData(currentTarget)}
                    onChange={() => errors.email && removeError('email')}
                    label="Email"
                    placeholder="abc@abc.com"
                    id="email"
                    type="email"
                    autoComplete="email"
                    error={errors.email}
                />
                <Input
                    onBlur={({ currentTarget }) => setUserData(currentTarget)}
                    onChange={() => errors.password && removeError('password')}
                    label="Password"
                    placeholder="One password to rule them all"
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    error={errors.password}
                />
                <Button label="Login" onClick={() => {}} type="submit" theme="secondary" />
            </form>
            <div className="navigation">
                <Divider text="OR" />
                <Link to="/signup" title="Sign up to an account" fontSize="l" />
            </div>
        </div>
    );
};
