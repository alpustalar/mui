import {Button, InputAdornment, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {useNavigate} from "react-router-dom";


const LoginItem = ({
                       errors, values, touched, handleBlur, handleChange,
                       name,
                       index,
                       setIndex,
                        setChangePage
                   }) => {


    const navigate = useNavigate();

    const [animationParent] = useAutoAnimate()

    const [inputType, setInputType] = useState("text");
    const [pwVisible, setPwVisible] = useState(false);
    const [typing, setTyping] = useState(false);
    const [click, setClick] = useState(false);

    useEffect(() => {
        setInputType(pwVisible ? "text" : "password")
    }, [pwVisible]);
    useEffect(() => {
       setInputType(name !== "password" ? "text" : "password");
    }, [index, values]);


    const handleNavigate = () => index === 1 && setTimeout(()=> navigate("/"),1450);


    return (
        <>
            <Stack
                rowGap={2}
                ref={animationParent}

            >
                <TextField
                    type={inputType}
                    required={false}
                    color={(touched[name] && !errors[name]) ? "success" : (touched[name] && errors[name]) ? "error" : "warning"}
                    label={name.toUpperCase()}
                    variant="standard"
                    margin="dense"
                    fullWidth={true}
                    InputProps={
                        name === "password" &&
                        {
                            endAdornment: (
                                <InputAdornment
                                    sx={{cursor:"pointer"}}
                                    onClick={() => {
                                        setPwVisible(vis => !vis);
                                    }}
                                    position={"start"}>
                                    {
                                        !pwVisible ? <AiFillEye/> : <AiFillEyeInvisible/>
                                    }
                                </InputAdornment>
                            ),
                        }}

                    value={values[name]}
                    onChange={handleChange}
                    onInput={()=>{
                        setTyping(true);
                        setClick(true);
                    }}
                    onBlur={handleBlur}
                    name={name}
                    onClick={()=>setClick(true)}
                />
                {(touched[name] && errors[name]) && <span className="err-span">{errors[name]}</span>}

                <Stack direction={"row"} columnGap={2}>
                {
                    (
                        <Button
                            onClick={() => {

                                setChangePage(Number(index) === 1 && true)
                                setIndex(index => Number(index) !== 0 ? index - 1 : index);


                            }}
                            variant="outlined"
                            color={"secondary"}
                        >
                            Prev
                        </Button>
                    )

                }
                     <Button
                         disabled={!click || (errors[name]) ? true : false}
                    onClick={() => {
                        setIndex(index => index + 1 );
                        handleNavigate();
                    }}
                    variant="outlined"
                    color={(typing && errors[name]) ? "error" : "success"}
                >{index < 1 ? "next" : "submit"}</Button>

                </Stack>


            </Stack>


            <style jsx={"true"}>{`
                .err-span {
                    color: red;
                    font-size: 12px;
                    margin-top: -10px;
                    margin-left: 5px;
                    margin-bottom: 15px;
                }
            `}</style>
        </>
    );
}

export default LoginItem;
