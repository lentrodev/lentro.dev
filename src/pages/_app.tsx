import '../../styles/globals.css'
import type {AppProps} from 'next/app'


import '@fontsource/sora/400.css';
import '@fontsource/jetbrains-mono/400.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {CookiesProvider} from "react-cookie";
import {Scrollbar} from "react-scrollbars-custom";
import React, { useEffect, useRef, useState} from "react";
import ParticlesCanvas from "../components/ParticlesCanvas";
import { isMobile} from "react-device-detect";

function MyApp({Component, pageProps }: AppProps) {


    const theme = createTheme({
        palette: {
            mode: "dark"
        },
        typography: {
            fontFamily: "Sora"
        }
    });

    //const ref = React.useRef();

    let scrollRef = useRef<Scrollbar>(null);

    const scrollTo = (elementId: string) => {
        let el = document.getElementById(elementId);
        (scrollRef?.current?.scrollerElement ?? document.scrollingElement)!.scrollTo({
            top: el!.getBoundingClientRect().top,
            behavior: "smooth"
        })
    };

    const [height, setH] = useState(0);

    useEffect(() => {
        setH((scrollRef.current ?? document.scrollingElement)!.scrollHeight);
    }, []);

    console.log(height);

    return <>
        <CookiesProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {!isMobile ? <ParticlesCanvas height={(height - 200).toString() + "px"}/> : <></>}
                <Component {...pageProps} smoothScrollTo={scrollTo}/>
            </ThemeProvider>
        </CookiesProvider>
    </>
}

export default MyApp