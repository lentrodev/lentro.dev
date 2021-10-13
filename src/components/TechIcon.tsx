import {Box, Grid, hexToRgb, Theme, Tooltip, Typography} from "@mui/material";
import React from "react";
import {SxProps} from "@mui/system";
import {Knowledge, Level} from "../models/Skill";


export default function TechIcon(props: { type: string, boxProps?: SxProps<Theme>, iconType?: string }) {

    return <Box width={64} height={64} sx={{
        ...{
            "> img": {
                borderRadius: "33%",
                transition: "all 0.3s",
                "&:hover": {}
            }
        },
        ...props.boxProps
    }}>
        <img width={64} height={64}
             src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.type}/${props.type}-${props.iconType ?? "original"}.svg`}/>
    </Box>

}