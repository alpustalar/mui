import {Box, Container, Drawer, IconButton, Paper, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {RiMenu3Fill} from "react-icons/ri";
import {FaX} from "react-icons/fa6";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import HeaderNavigation from "./HeaderNavigation.jsx";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrollDown, setIsScrollDown] = useState(false);
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
    const [animationParent] = useAutoAnimate()



    useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 100) {
                    setIsScrollDown(true)
                } else {
                    setIsScrollDown(false)
                }
            };

            let scrollY = window.addEventListener("scroll", handleScroll)
            return () => removeEventListener("scroll", scrollY);

        },
        []);



    return (
        <>


            <Box sx={{
                py: mobileMenuOpen ? 0 : 2,
                bgcolor: isScrollDown ? "#1f1f1f" : "transparent",
                zIndex: 9,
                transition: "all 0.3s ease"
            }}
                 className={"header-wrapper"}
            >
                <Container maxWidth={"md"}
                           sx={{
                               display: "flex",
                               justifyContent: "end"
                           }}
                           ref = {animationParent}
                >
                    {
                        isMdDown ?
                            (
                                !mobileMenuOpen &&
                                <IconButton
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <RiMenu3Fill/>

                            </IconButton>) : <Typography variant={"h6"}>LOGO</Typography>
                    }




                    <Drawer
                        sx={{ position: "fixed" }}

                        open={mobileMenuOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                            setMobileMenuOpen(false)
                        }}
                    >
                        <Box width={isMdDown ? "80vw" : 450} height={"100vh"}
                             onClick={(e) => e.stopPropagation()}
                        >

                            <HeaderNavigation />

                        </Box>

                        <IconButton
                            style={{
                                position: "absolute", right: 15, top: 15, fontSize: 20,
                            }}>
                        <FaX/>
                        </IconButton>

                    </Drawer>
                </Container>
            </Box>


            <style jsx={"true"}>{`
                .header-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            `}</style>
        </>
    );
}

export default Header;



