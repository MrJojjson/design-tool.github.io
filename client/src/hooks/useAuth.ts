import { RegisterUserMutationType } from '../common/types/registerTypes';
import { DocumentNode, useQuery, useMutation } from '@apollo/react-hooks';
import { LoginUserMutationType } from '../common/types/loginType';

// export function useTodoQuery(gqlQuery: DocumentNode) {
//   const { loading, error, data } = useQuery<ITodos>(gqlQuery);
//   return { loading, error, data };
// }

export function userRegisterUserMutation(gqlQuery: DocumentNode) {
    const [registerUser, { data }] = useMutation<RegisterUserMutationType>(gqlQuery);
    return { registerUser, data };
}

export function userLoginUserMutation(gqlQuery: DocumentNode) {
    const [loginUser, { data }] = useMutation<LoginUserMutationType>(gqlQuery);
    return { loginUser, data };
}
