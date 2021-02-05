import React, { Component, useState } from 'react';
import { Link } from '@reach/router';

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
        <div className="container">
            <div style={{ marginTop: '4rem' }} className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                        <h4>
                            <b>Login</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
                        <div className="input-field col s12">
                            <input
                                onChange={({ currentTarget }: React.ChangeEvent<HTMLInputElement>) =>
                                    setEmail(currentTarget.value)
                                }
                                autoComplete="email"
                                value={email}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={({ currentTarget }: React.ChangeEvent<HTMLInputElement>) =>
                                    setPassword(currentTarget.value)
                                }
                                autoComplete="current-password"
                                value={password}
                                id="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                            <button
                                style={{
                                    width: '150px',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px',
                                    marginTop: '1rem',
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
