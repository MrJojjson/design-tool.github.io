export interface RegisterUserInterface {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type RegisterUserMutationType = {
    registerUser: RegisterUserInterface;
};
