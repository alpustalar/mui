import {Box} from "@mui/material";

const SliderItem = ({value}) => {

    return (
        <>
            <Box
                sx={{
                    bgcolor: "primary.light",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowX: "hidden",
                    width: "100%",

                }} className="slider-item">

                <img src={value?.img1} alt={"slider-image"}
                     style={{
                         filter: "brightness(0.6)",
                     }}/>
                <img src={value?.img2} alt={"slider-image"}
                     style={{
                         filter: "brightness(0.25)",
                     }}/>
            </Box>


            <style jsx={"true"}>{`
                img{
                    width: 50%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }                                
            `}</style>
        </>
    );
}

export default SliderItem;