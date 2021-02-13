import gql from 'graphql-tag';

export const REGISTER_USER = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!, $confirmPassword: String!)
    @api(name: auth) {
        registerUser(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
            status {
                code
                error
                message
            }
            node {
                user {
                    email
                    name
                }
                errors {
                    name
                    email
                    password
                    confirmPassword
                }
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) @api(name: auth) {
        loginUser(email: $email, password: $password) {
            status {
                code
                error
                message
            }
            node {
                token
                user {
                    _id
                    name
                }
                errors {
                    name
                    email
                    password
                    confirmPassword
                }
            }
        }
    }
`;
