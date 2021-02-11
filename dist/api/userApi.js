import gql from "../../_snowpack/pkg/graphql-tag.js";
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
