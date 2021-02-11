import o from"../../_snowpack/pkg/graphql-tag.js";export const DELETE_USER=o`
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