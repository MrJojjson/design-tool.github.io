import { RegisterUserMutationType } from './../common/types/registerTypes';
import { DocumentNode, useQuery, useMutation } from '@apollo/react-hooks';

// export function useTodoQuery(gqlQuery: DocumentNode) {
//   const { loading, error, data } = useQuery<ITodos>(gqlQuery);
//   return { loading, error, data };
// }

export function userRegisterUserMutation(gqlQuery: DocumentNode) {
    const [registerUser] = useMutation<RegisterUserMutationType>(gqlQuery);
    return [registerUser];
}
