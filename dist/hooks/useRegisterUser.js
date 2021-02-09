import {useMutation} from "../../_snowpack/pkg/@apollo/react-hooks.js";
export function userRegisterUserMutation(gqlQuery) {
  const [registerUser] = useMutation(gqlQuery);
  return [registerUser];
}
