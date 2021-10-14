import {Box, Theme} from "@mui/material";
import React from "react";
import {SxProps} from "@mui/system";
import {isMobile} from "react-device-detect";


export default function TechIcon(props: { type: string, boxProps?: SxProps<Theme>, iconType?: string }) {

    let size = { width: isMobile ? 48 : 64, height: isMobile ? 48 : 64};

    return <Box {...size} sx={{
        ...{
            "> img": {
                borderRadius: "33%",
                margin: "auto"
            }
        },
        ...props.boxProps
    }}>
        <img {...size}
             src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.type}/${props.type}-${props.iconType ?? "original"}.svg`}/>
    </Box>

}