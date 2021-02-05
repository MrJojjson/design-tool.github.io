import { UserType, User } from "./../models/user";

export const findUser = ({ email }: Pick<UserType, "email">) =>
  User.findOne({ email }).then((existingUser: UserType) => existingUser);
