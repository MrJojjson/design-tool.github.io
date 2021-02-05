import { UserType } from "../models/user/index";
import { deleteUser } from "../utils/modifiers";
import { findUser } from "../utils/selectors";
import { validateDeleteUserInput } from "../validation/delete/index";

export const deleteUserResolver = {
  async deleteUser(_: any, args: Pick<UserType, "email">) {
    const { errors, isValid } = validateDeleteUserInput(args);

    if (!isValid) {
      return { status: 400, node: { errors } };
    }
    const { email } = args || {};
    const { name, _id } = (await findUser({ email })) || {};

    if (!_id) {
      return {
        status: 400,
        node: {
          errors: `User ${email} has already been deleted`,
        },
      };
    }
    return deleteUser({ email, _id })
      .then(async (data: any) => {
        const { ok, deletedCount } = data;

        if (deletedCount !== 0 && ok !== 0) {
          return {
            status: 200,
            node: { user: { email }, deleteStatus: { ...data } },
          };
        }
        return {
          status: 404,
          node: {
            errors: `Something went wrong when deleting user ${email} (${name}).`,
            deleteStatus: { ...data },
          },
        };
      })
      .catch((errors: any) => {
        return { status: 404, node: { errors } };
      });
  },
};
