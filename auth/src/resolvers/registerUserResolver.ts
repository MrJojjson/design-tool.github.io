import { User } from "../models/user";
import { hashPassword, saltPassword } from "../utils/password";
import { UserType } from "./../models/user/index";
import { findUserByEmail } from "./../utils/selectors";
import { validateRegisterInput } from "../validation/validateRegisterInput";
import { Document } from "mongoose";

export const registerUserResolver = {
  registerUser(_: any, args: UserType) {
    const { errors, isValid } = validateRegisterInput(args);
    console.log("errors", errors);

    if (!isValid) {
      return { status: { code: 400 }, node: { errors } };
    }

    const { name, email, password } = args || {};

    return findUserByEmail({ email })
      .then(
        async (existingUser: UserType | (UserType & Document<any>) | null) => {
          console.log("existingUser", existingUser);

          if (!existingUser || existingUser?.email) {
            return {
              status: { code: 400 },
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
                status: { code: 200 },
                node: { user: { _id, name, email } },
              };
            } catch (errors) {
              return { status: { code: 500 }, node: { errors } };
            }
          }
        }
      )
      .catch((error: any) => ({ status: { code: 404, error } }));
  },
};
