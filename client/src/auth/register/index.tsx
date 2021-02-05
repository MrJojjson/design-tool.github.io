import React, { useState } from 'react';
import { Link } from '@reach/router';

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
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            confirmPassword,
        };
        console.log(newUser);
    };

    return (
        <div className="container">
            <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                <h4>
                    <b>Register</b> below
                </h4>
                <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
            <form noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
                <div className="input-field col s12">
                    <input
                        onChange={({ currentTarget }: React.ChangeEvent<HTMLInputElement>) =>
                            setName(currentTarget.value)
                        }
                        autoComplete="name"
                        value={name}
                        id="name"
                        type="text"
                    />
                    <label htmlFor="name">Name</label>
                </div>
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
                        autoComplete="new-password"
                        value={password}
                        id="password"
                        type="password"
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s12">
                    <input
                        onChange={({ currentTarget }: React.ChangeEvent<HTMLInputElement>) =>
                            setConfirmPassword(currentTarget.value)
                        }
                        autoComplete="new-password"
                        value={confirmPassword}
                        id="password2"
                        type="password"
                    />
                    <label htmlFor="password2">Confirm Password</label>
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
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};
