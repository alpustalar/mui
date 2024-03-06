import {useState} from "react";
import {Button, Stack, Typography} from "@mui/material";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import Login from "../components/account/Login.jsx";
import Register from "../components/account/Register.jsx";
import {useNavigate} from "react-router-dom";

const AccountPage = () => {

    const [animationParent] = useAutoAnimate()
    const [changePage, setChangePage] = useState(false);

    const navigate = useNavigate();



    return (
        <>
            <Stack
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100vh"
                ref={animationParent}
            >

                {!changePage &&
                    <>
                        <Typography variant={"h4"}>Do you have any account?</Typography>
                        <Stack direction={"row"} columnGap={2} mt={4}>
                            <Button
                                className="account-button"
                                onClick={() => {
                                    setChangePage(true);
                                }}
                                variant={"outlined"}
                                color={"secondary"}
                            >Yes</Button>
                            <Button
                                onClick={() => {
                                    navigate("/register")
                                }}
                                className="account-button"
                                variant="outlined"
                                color={"error"}
                            >i want</Button>
                        </Stack>
                    </>
                }

                {
                    changePage &&
                    <Login
                        setChangePage={setChangePage}
                    />
                }


            </Stack>



            <style jsx={"true"}>{`
                .account-button {
                    width: 90px;
                }
            `}</style>
        </>
    );
}

export default AccountPage;