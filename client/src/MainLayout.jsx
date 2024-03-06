import {Outlet} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import Header from "./components/menu/Header.jsx";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    }
})

const lightTheme = createTheme({
    palette: {
        mode: "light"
    }
})

export const MainLayout = () => {

    const [dark, setDark] = useState(null);

    useEffect(() => {

        const curTime = new Date();
        const hour = Number(`${curTime.getHours()}${curTime.getMinutes() < 10 ? `0${curTime.getMinutes().toString()}` : curTime.getMinutes()}`);
        const getCurrentTime = () => (630 <= hour && hour <= 1730) ? setDark(false) : setDark(true);

        getCurrentTime();

        const intervalTime = setInterval(getCurrentTime, 60 * 1000)

        return () => clearInterval(intervalTime)

    }, []);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>

                <Header />
                <Outlet />

            </ThemeProvider>
        </>
    );
};








