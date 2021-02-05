import { User } from "../models/user";
import { hashPassword, saltPassword } from "../utils/password";
import { UserType } from "./../models/user/index";
import { findUser } from "./../utils/selectors";
import { validateRegisterInput } from "./../validation/register/index";

export const registerUserResolver = {
  registerUser(_: any, args: UserType) {
    const { errors, isValid } = validateRegisterInput(args);

    if (!isValid) {
      return { status: 400, node: { errors } };
    }

    const { name, email, password } = args || {};

    return findUser({ email })
      .then(async (existingUser: UserType) => {
        if (existingUser?.email) {
          return {
            status: 400,
            node: {
              errors: {
                email: `Email: ${email} already exists.`,
              },
            },
          };
        } else {
          const salt = saltPassword();
          const newUser = new User({
            name,
            email,
            hash: hashPassword({ password, salt }),
            salt,
          });
          try {
            const { _id, name, email } = await newUser.save();
            return {
              status: 200,
              node: { user: { _id, name, email } },
            };
          } catch (errors) {
            return { status: 400, node: { errors } };
          }
        }
      })
      .catch((err: any) => console.log(err));
  },
};
