import gql from 'graphql-tag';

export const DELETE_USER = gql`
    mutation DeleteUser($email: String!) @api(name: auth) {
        deleteUser(email: $email) {
            status
            node {
                deleteStatus {
                    deletedCount
                    ok
                    n
                }
                errors
            }
        }
    }
`;
