import {Box, Stack} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";


const navTitles = [
    "home",
    "about us",
    "products",
    "account"
]
const HeaderNavigation = () => {
    
    const navigate = useNavigate();


    return (
        <>
            <Stack
                bgcolor={"black"}
                height={"100vh"}
                alignItems={"center"}
                justifyContent={"center"}
            >

                <Box
                    onClick={() => {
                        navigate("/");
                    }}
                    sx={{cursor:"pointer"}}
                >
                    <img src="/images/8a1cc1f12db93cb077798b3a389475c9.jpg"
                     style={{
                         position:"absolute",
                         width: 35,
                         height: 35,
                         top: "30%",
                         left: "50%",
                         transform: "translate(-50%, -50%)",
                    }}
                     alt="logo"/>
                </Box>

                <Stack
                    align={"center"}
                    rowGap={1}
                >
                    {
                        navTitles.map(title => (
                            <NavLink to={`/${title !== "home" ? title.replace(" ", "-") : ""}`}
                                     className={({isActive}) =>
                                         isActive ? "navlink nav-active" : "navlink"
                                     }
                            >{title}</NavLink>
                        ))
                    }
                </Stack>

            </Stack>

            <style jsx={"true"}>{`
                .navlink {
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    color: white !important;
                    text-decoration: none;
                    transition: .1s ease;
                    position: relative;
                    
                    &:hover{
                        font-weight: bold;
                        font-size: 1.1rem;
                    }
                    
                    
                }

                .nav-active {
                    font-weight: bold;
                    font-size: 1.2rem;
                }
                
            `}</style>
        </>
    );
}

export default HeaderNavigation;
