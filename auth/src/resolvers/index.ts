import { registerUserResolver as RegisterMutation } from "./registerUserResolver";
import { loginUserResolver as LoginMutation } from "./loginUserResolver";
import { deleteUserResolver as DeleteMutation } from "./deleteUserResolver";
import { renameUserResolver as RenameMutation } from "./renameUserResolver";
import { changePasswordUserResolver as ChangePasswordMutation } from "./changePasswordUserResolver";
import { getUserResolver as GetUserQuery } from "./getUserResolver";

export default {
  Query: { ...GetUserQuery },
  Mutation: {
    ...RegisterMutation,
    ...LoginMutation,
    ...DeleteMutation,
    ...RenameMutation,
    ...ChangePasswordMutation,
  },
};
