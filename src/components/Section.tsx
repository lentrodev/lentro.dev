import {Box, Divider, Grid, Theme, Typography} from "@mui/material";
import {PropsWithChildren} from "react";
import {SxProps} from "@mui/system";
import {isMobile} from "react-device-detect";

export default function Section(props: PropsWithChildren<SectionProps>) {
    let useInlineTitle = props.inlineTitle ?? true;
    return <>

            <Grid id={props.id}
                container
                direction="column"
                justifyContent="stretch"
                alignItems="center"
                  sx={{flexGrow: 1}}
            >
                <Grid item xs>
                    <Box padding={5} alignSelf={"flex-start"} alignItems={"flex-start"}>
                        {useInlineTitle ?
                        <Divider sx={{...{minWidth: isMobile ? "75vw" : "45vw"}, ...props.dividerProps}}>
                            <Typography variant={"h6"} sx={{mt: 0}}>
                                {props.title}
                            </Typography>
                        </Divider>
                             : <Box>
                                <Typography variant={"h6"} align={"center"} sx={{mt: 0}}>
                                    {props.title}
                                </Typography>
                            <Divider sx={props.dividerProps}/></Box>}
                    </Box>
                </Grid>
                <Grid item xs sx={{flexGrow: 1}}>{props.children}</Grid>
            </Grid>
    </>;
}

interface SectionProps {
    title: string;
    id?: string;
    inlineTitle?: boolean;
    dividerProps?: SxProps<Theme>;
}