import { KeyboardArrowUp } from "@mui/icons-material";
import {Box, createStyles, Fab, Theme, Typography, Tooltip, useScrollTrigger, Zoom} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, {useEffect, useState} from "react";

export default function GoToTopButton(props: { smoothScrollTo?: (elementId: string) => void; }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    return <Zoom in={trigger}>
        <Box sx={
            {
                position: "fixed",
                zIndex: theme => theme.zIndex.tooltip,
                bottom: theme => theme.spacing(2),
                right: theme => theme.spacing(2),
            }

        } onClick={() => props.smoothScrollTo!("")}>
            <Tooltip title={<Typography variant={"caption"}>Go to top</Typography>}>
            <Fab size="medium" color="primary" sx={{
                "&:hover": {
                    boxShadow: theme => theme.shadows[5]
                }
            }}>
                <KeyboardArrowUp />
            </Fab>
            </Tooltip>
        </Box>
    </Zoom>

}