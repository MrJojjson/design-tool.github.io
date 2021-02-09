import r from"../../_snowpack/pkg/graphql-tag.js";export const REGISTER_USER=r`
    mutation RegisterUser($name: String!, $email: String!, $password: String!, $confirmPassword: String!)
    @api(name: auth) {
        registerUser(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
            status
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
`,LOGIN_USER=r`
    mutation LoginUser($email: String!, $password: String!) @api(name: auth) {
        login(email: $email, password: $password) {
            status
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
