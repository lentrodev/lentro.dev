import {AppBar, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import React from "react";

export default function ApplicationBar() {
    
    const scrollTrigger = useScrollTrigger({ threshold: 200 });

    const opacitySx = scrollTrigger ? { opacity: 0 } : {};

    return <AppBar position="sticky" sx={{...{background: "rgba(0,0,0,0)", boxShadow: 0, transition:"opacity 0.5s"}, ...opacitySx}}>
        <Toolbar>
            <Typography align={"center"} variant="h6" sx={{flexGrow: 1, fontFamily: "Sora"}}>
                lentro.dev
            </Typography>
        </Toolbar>
    </AppBar>
}