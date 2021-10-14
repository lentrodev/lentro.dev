import '../../styles/globals.css'
import type {AppProps} from 'next/app'


import '@fontsource/sora/400.css';
import '@fontsource/jetbrains-mono/400.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {CookiesProvider} from "react-cookie";
import {Scrollbar} from "react-scrollbars-custom";
import React, {useEffect, useRef, useState} from "react";
import ParticlesCanvas from "../components/ParticlesCanvas";
import {isMobile} from "react-device-detect";
import GoToTopButton from '../components/GoToTopButton';
import {MutableRefObject, Ref} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const theme = createTheme({
        palette: {
            mode: "dark"
        },
        typography: {
            fontFamily: "Sora"
        }
    });

    const scrollTo = (elementId: string) => {
        let el = document.getElementById(elementId);
        (document.scrollingElement)!.scrollTo({
            top: el?.getBoundingClientRect()?.top ?? 0,
            behavior: "smooth"
        })
    };

    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(document.scrollingElement!.scrollHeight);
    }, [height]);

    return <>
        <CookiesProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <GoToTopButton smoothScrollTo={scrollTo}/>
                    <ParticlesCanvas height={(height).toString() + "px"}/>
                    <Component {...pageProps} smoothScrollTo={scrollTo}/>
            </ThemeProvider>
        </CookiesProvider>
    </>
}

export default MyApp