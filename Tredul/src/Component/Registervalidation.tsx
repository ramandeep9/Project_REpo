interface FormValues {
    username: string;
    email: string;
    password: string;
}

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
}
function hasErrors(errors: FormErrors): boolean {
    return Object.values(errors).some(error => error !== undefined && error !== '');
}

export type { FormErrors, hasErrors };
export default function Validation(values: FormValues): FormErrors {
    let error: FormErrors = {};
    hasErrors(error); 

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.username === "") {
        error.username = "Name should not be empty";
    } else {
        error.username = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is invalid";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least one digit, one lowercase and one uppercase letter, and at least 8 characters";
    } else {
        error.password = "";
    }

    return error;
}