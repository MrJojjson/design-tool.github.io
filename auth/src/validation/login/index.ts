import Validator from 'validator';
import isEmpty from 'is-empty';

type IIValidateRegisterInput = {
    email?: string;
    password?: string;
};

export const validateLoginInput = ({
    email = '',
    password = '',
}: IIValidateRegisterInput): {
    errors: IIValidateRegisterInput;
    isValid: boolean;
} => {
    const errors: IIValidateRegisterInput = {};

    if (Validator.isEmpty(email)) {
        errors.email = 'Email field is required';
    } else if (!Validator.isEmail(email)) {
        errors.email = 'Email is invalid';
    }
    // Password checks
    if (Validator.isEmpty(password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
