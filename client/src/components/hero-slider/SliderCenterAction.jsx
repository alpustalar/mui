import {Button, Stack, Typography} from "@mui/material";
import "../../css/slick/slider-center-action.scss";

const SliderCenterAction = () => {

    return (
        <>
            <Stack
                position={"absolute"}
                top={"35%"}
                left={"50%"}
                sx={{transform: "translate(-50%)"}}
                zIndex={1}
                alignItems="center"
                rowGap={2}
                width={"70%"}
            >
                <Typography
                    className={"slick-center slick-title"}
                    variant={"h4"}
                    align={"center"}
                    textTransform={"uppercase"}
                    letterSpacing={1}
                    fontWeight={"bold"}
                >Halvah dragée candy tootsie roll.</Typography>

                <Typography
                    className={"slick-center slick-subtitle"}
                    variant={"body1"}
                    align={"center"}
                >Muffin cake chocolate cake biscuit apple pie chupa chups pudding lemon drops brownie.
                </Typography>

                <Button
                    className={"slick-center slick-button"}
                    variant={"outlined"}
                    color={"primary"}
                    sx={{paddingX: 7, borderRadius: 5, mt:2, backdropFilter: "blur(5px)"}}
                >check it</Button>
            </Stack>
        </>
    );
}

export default SliderCenterAction;