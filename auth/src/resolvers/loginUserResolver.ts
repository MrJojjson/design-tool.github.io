import jwt from "jsonwebtoken";
import { keys } from "../config/keys";
import { UserType } from "../models/user/index";
import { validPassword } from "../utils/password";
import { findUser } from "../utils/selectors";
import { validateLoginInput } from "../validation/login/index";

export const loginUserResolver = {
  loginUser(_: any, args: Pick<UserType, "email" | "password">) {
    const { errors, isValid } = validateLoginInput(args);

    if (!isValid) {
      return { status: 400, node: { errors } };
    }
    const { email, password } = args || {};

    return findUser({ email })
      .then(async (existingUser: UserType) => {
        if (!existingUser?.email) {
          return {
            status: 404,
            node: {
              errors: {
                email: `Email: ${email} not found.`,
              },
            },
          };
        } else if (
          validPassword({
            password,
            hash: existingUser.hash,
            salt: existingUser.salt,
          })
        ) {
          const { _id, name } = existingUser || {};

          const token = jwt.sign(
            {
              _id,
              name,
            },
            keys.secretOrKey,
            {
              expiresIn: 31556926, // 1 year in seconds
            }
          );
          try {
            return {
              status: 200,
              node: {
                token: `Bearer ${token}`,
                user: {
                  name: existingUser.name,
                  _id: existingUser._id,
                },
              },
            };
          } catch (errors) {
            return { status: 400, node: { errors } };
          }
        } else {
          return {
            status: 400,
            node: {
              errors: {
                password: `Incorrect password.`,
              },
            },
          };
        }
      })
      .catch((err: any) => console.log(err));
  },
};
