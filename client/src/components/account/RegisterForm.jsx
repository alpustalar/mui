import {Stack} from "@mui/material";
import RegisterFormItem from "./RegisterFormItem.jsx";
import {useState} from "react";

const registerItems = [
    {
        name: "name",
        type: "text",
    },
    {
        name: "username",
        type: "text"
    },
    {
        name: "email",
        type: "email"
    },
    {
        name: "password",
        type: "password"
    },
    {
        name: "rePassword",
        type: "password"
    }
]

const RegisterForm = () => {


    const [index, setIndex] = useState(0);

    return (
        <>
            <Stack
                alignItems="start"
                justifyContent="center"
                height="100vh"
                padding={5}
                rowGap={2}
            >
                {
                    registerItems.map((item, key) => (

                        index === key &&
                        <RegisterFormItem
                            setIndex={setIndex}
                            key={key}
                            item={item}
                        />
                    ))
                }
            </Stack>


        </>
    );
}

export default RegisterForm;