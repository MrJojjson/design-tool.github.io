// in src/resolvers
import { registerUserResolver as RegisterMutation } from "./registerUserResolver";
import { loginUserResolver as LoginMutation } from "./loginUserResolver";
import { deleteUserResolver as DeleteMutation } from "./deleteUserResolver";

export default {
  Query: {},
  Mutation: { ...RegisterMutation, ...LoginMutation, ...DeleteMutation },
};
