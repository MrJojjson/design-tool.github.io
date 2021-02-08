import { UserType, User } from "./../models/user";

type FindUserType = {
  email?: UserType["email"];
  name?: UserType["name"];
  _id?: UserType["_id"];
};

export const findUserById = ({ _id }: Pick<UserType, "_id">) =>
  User.findOne({ _id }).then((existingUser: UserType) => existingUser);

export const findUserByEmail = ({ email }: Pick<UserType, "email">) =>
  User.findOne({ email }).then((existingUser: UserType) => existingUser);

export const findUserByName = ({ name }: Pick<UserType, "name">) =>
  User.findOne({ name }).then((existingUser: UserType) => existingUser);

export const findUser = (args: FindUserType) =>
  User.findOne({ ...args }).then((existingUser: UserType) => existingUser);
