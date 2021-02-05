import { UserType, User } from "./../models/user/index";

export const deleteUser = ({ email, _id }: Pick<UserType, "email" | "_id">) =>
  User.deleteOne({ email, _id })
    .then((data: any) => {
      console.log("Successful deletion", data);
      return data;
    })
    .catch((err: any) => console.log(err));
