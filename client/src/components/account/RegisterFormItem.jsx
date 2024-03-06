import {Button, TextField} from "@mui/material";

const RegisterFormItem = ({item, setIndex}) => {

    const {name, type} = item;

    return (
        <>
            <TextField
                type={type}
                required={false}
                color={"primary"}
                label={name}
                variant="standard"
                margin="dense"
                fullWidth={true}
                helperText={""}
                placeholder=""
                name={name}
            />

            <Button
                onClick={() => {
                    setIndex(index => index + 1);
                }}
                variant="outlined"

            >Next</Button>
        </>
    );
}

export default RegisterFormItem;