import Slider from "react-slick";
import {Box} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem.jsx";
import "../../css/slick/slick.scss"
import SliderCenterAction from "./SliderCenterAction.jsx";
import {useAutoAnimate} from "@formkit/auto-animate/react";




const images = [
    {
        img1: "https://i.pinimg.com/564x/02/5d/70/025d706542030a1ce3450f9d3e0e3558.jpg",
        img2: "https://i.pinimg.com/564x/76/35/1d/76351d9e341bb6144eb54d9b64988ca9.jpg",
    },
    {
        img1: "https://i.pinimg.com/564x/4e/47/80/4e4780671ba50459b149eb0e371914ce.jpg",
        img2: "https://i.pinimg.com/564x/83/a4/6e/83a46ed24d2398dc6e003f249e795dd7.jpg",
    }
    ,
    {
        img1: "https://i.pinimg.com/736x/80/43/7c/80437c788157f96cb7abaeae9ce64fd4.jpg",
        img2: "https://i.pinimg.com/564x/00/85/c2/0085c2def4a52516b947425dc7f76b21.jpg",
    }

]


const HeroSlider = () => {

    const [animationParent] = useAutoAnimate()



    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
    };


    return (
        <>

            <Box position="relative" height="100vh" width={"100%"} overflow="hidden">

                <SliderCenterAction />

                <Slider {...settings}
                        className="slick-slider"
                >
                    {
                        images.map((value, key) => (
                            <SliderItem
                            key={key}
                            value={value}
                            />

                        ))
                    }
                </Slider>
            </Box>


        </>
    );
}

export default HeroSlider;

