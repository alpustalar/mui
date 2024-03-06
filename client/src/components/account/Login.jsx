import LoginItem from "./LoginItem.jsx";
import {Box, Stack, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useFormik} from "formik";
import {LoginSchema} from "../../yup/LoginSchema.js";
import {useState} from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {MdDownloadDone} from "react-icons/md";
import {AiFillHeart} from "react-icons/ai";
import {motion} from "framer-motion";

const loginReq = [
    "username",
    "password"
]

const Login = ({setChangePage}) => {

    const [index, setIndex] = useState(0);
    const [animationParent] = useAutoAnimate()



    const {values, errors, handleChange, handleSubmit, handleBlur, touched} = useFormik({
        initialValues: {
            name: "",
            password: "",
        },

        validationSchema: LoginSchema,
    });


    let steps = [
        "username",
        "password"
    ]

    console.log("=>(Login.jsx:37) index", index);



    return (
        <>

        <Box width="100%" position="absolute" bottom={40}>
            {
                (index < steps.length) ? (
                    <Stepper activeStep={index} alternativeLabel>
                        {steps.map((label, key) => (
                            <Step key={key}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                ) : (
                    <motion.div
                        initial={{ marginBottom: 0, translateY: 0 }}
                        animate={{
                            marginBottom: index === 2 ? "50%" : "0%",
                            translateY: index === 2 ? 50 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <Stack alignItems={"center"} mt={7}>
                            <MdDownloadDone fontSize={29} color={"#a44fff"}
                                            style={{border: "1px solid", borderRadius: "100%", padding: 4}}/>
                            <Typography mt={3} variant={"h6"} color={"#c259ff"}>I'll redirect you</Typography>
                            <AiFillHeart style={{marginTop: 34, color: "#c259ff"}}/>
                        </Stack>
                    </motion.div>
                )
            }
        </Box>





            <Box width="80%"
                 ref={animationParent}
            >
                {loginReq.map((value, key) => {
                    return (
                        index === key &&
                        <LoginItem
                            values={values}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            name={value}
                            key={key}
                            index={index}
                            setIndex={setIndex}
                            setChangePage={setChangePage}

                        />
                    );
                })}
            </Box>


        </>
    );
}

export default Login;






