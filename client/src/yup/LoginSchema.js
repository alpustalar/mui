import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,50}$/;
const usernameRules = /^[a-zA-Z0-9]+[\s._-]?([\s._-]?[a-zA-Z0-9]*)*$/;


export const LoginSchema = yup.object().shape({
    username: yup.string()
        .min(3)
        .matches(usernameRules, {
            message : "Invalid."
        })
        .required()
    ,
    password: yup.string()
        .min(8)
        .matches(passwordRules, {
            message: "The password must contain at least one uppercase letter, one lowercase letter, one special character and a number"
        })
        .required(),
});