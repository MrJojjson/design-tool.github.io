import { UserType } from "../../models/user/index";
import Validator from "validator";
import isEmpty from "is-empty";

type IIValidateDeleteUserInput = {
  email?: UserType["email"];
};

export const validateDeleteUserInput = ({
  email = "",
}: IIValidateDeleteUserInput): {
  errors: IIValidateDeleteUserInput;
  isValid: boolean;
} => {
  const errors: IIValidateDeleteUserInput = {};

  if (Validator.isEmpty(email)) {
    errors.email = "Email field is empty";
  } else if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
