import {Box, Container, Grid, IconButton, Link, Tooltip, Typography} from "@mui/material";
import React, {ReactNode} from "react";
import PropsWithConfiguration from "../utils/PropsWithConfiguration";

import {GitHub, Telegram} from '@mui/icons-material';
import Contact from "../models/Contact";

function ContactView(props: { contact: Contact})
{
    const { contact } = props;

    let icon: ReactNode;

    switch(contact.name){
        case "GitHub":
            icon = <GitHub/>;
            break;
        case "Telegram":
            icon = <Telegram/>
            break;
    }

    return <Grid item>
        <Tooltip title={<Typography variant={"caption"} sx={{fontFamily: "Sora"}}>{contact.name}</Typography>}>
            <IconButton onClick={() => window.open(contact.url)}>
                {icon}
            </IconButton>
        </Tooltip>
    </Grid>
}

export default function ApplicationFooter(props: PropsWithConfiguration) {
    return <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
        }}
    >

        <Container maxWidth="sm">
            <Grid container direction={"row"} spacing={3}>
                <Grid item>
                    <Typography variant="body1">
                        Made by Mikhail Kozlov with ReactJS, MaterialUI and NextJS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {'Copyright © '}
                        <Link color="inherit" href="https://lentro.dev/">
                            lentro.dev
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
                {props.configuration.contacts.map((contact, index) => <ContactView key={`contact-${contact.name}`} contact={contact}/>)}
            </Grid>

        </Container>
    </Box>;
}

