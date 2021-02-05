import Validator from "validator";
import isEmpty from "is-empty";

type IAuthValidateRegisterInput = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export const validateRegisterInput = ({
  name = "",
  email = "",
  password = "",
  confirmPassword = "",
}: IAuthValidateRegisterInput): {
  errors: IAuthValidateRegisterInput;
  isValid: boolean;
} => {
  const errors: IAuthValidateRegisterInput = {};

  if (Validator.isEmpty(name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Confirm password field is required";
  }
  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(password, confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
