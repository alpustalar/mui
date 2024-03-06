import HeroSlider from "../components/hero-slider/HeroSlider.jsx";
import {Box} from "@mui/material";
import {motion} from "framer-motion";

const IndexPage = () => {


    return (
        <motion.div
        initial={{y:-150}}
        animate={{y:0}}
        >
            <HeroSlider />
        </motion.div>
    );
}

export default IndexPage;