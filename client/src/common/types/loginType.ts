export interface LoginUserInterface {
    node: {
        errors: {
            name?: string;
            email?: string;
            password?: string;
            confirmPassword?: string;
        };
    };
}

export type LoginUserMutationType = {
    loginUser: LoginUserInterface;
};

export type LoginUserType = {
    email: string;
    password: string;
};
