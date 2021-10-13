import {AppBar, Toolbar, Typography} from "@mui/material";
import React from "react";
import {useRouter} from "next/router";

export default function ApplicationBar() {
    const router = useRouter();

    return <AppBar position="static" sx={{background: "rgba(0,0,0,0)", boxShadow: 0}}>
        <Toolbar>
            <Typography align={"center"} variant="h6" sx={{flexGrow: 1, fontFamily: "Sora"}}>
                lentro.dev
            </Typography>
        </Toolbar>
    </AppBar>
}