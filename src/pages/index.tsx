import type {GetStaticProps, NextPage} from 'next'
import {useRouter} from "next/router";
import {Box, Button, Container, createTheme, Grid, ThemeProvider, Typography, useTheme} from "@mui/material";
import React, {useEffect} from 'react';
import {ChevronRight} from "@mui/icons-material";
import Configuration from "../models/Configuration";
import EducationSection from "../sections/EducationSection";
import ApplicationFooter from "../components/ApplicationFooter";
import ApplicationBar from "../components/ApplicationBar";
import {promises as fs} from "fs";
import path from "path";

import Head from "next/head";
import SkillsSection from "../sections/SkillsSection";
import AboutMeSection from "../sections/AboutMeSection";

const Home: NextPage<HomeProps> = ({configuration, smoothScrollTo, aboutMeText,}) => {

    const router = useRouter();

    const theme = useTheme();

    const [height, setHeight] = React.useState(0);
    useEffect(() => {
        var body = document.body,
            html = document.documentElement;

        setHeight(html.clientHeight);
    }, [height]);

    const scrollToSection = (section: string) => {
        smoothScrollTo!(section);
    }

    return (
        <>
            <Head>
                <title>Mikhail Kozlov - lentro.dev</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
                />
            </Head>
            <ApplicationBar/>

            <Container>
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{minHeight: '100vh'}}
                >
                    <ThemeProvider theme={createTheme({typography: {fontFamily: "JetBrains Mono"}})}>
                        <Grid item xs={3}>
                            <Typography variant="h4" align={"center"}>
                                {configuration.homeText}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant={"outlined"} onClick={() => scrollToSection("about-me")}
                                    startIcon={<ChevronRight/>}>
                                Learn More About Me
                            </Button>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Container>
            <Box sx={{boxShadow: theme => theme.shadows[9], backdropFilter: "blur(7.5px)"}}>
                <Container maxWidth={"lg"} sx={{flexGrow: 1}}>
                    <AboutMeSection text={aboutMeText}/>
                    <EducationSection configuration={configuration}/>
                    <SkillsSection configuration={configuration}/>
                </Container>
                <ApplicationFooter configuration={configuration}/>
            </Box>
        </>


    )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {

    const cfgFilePath = path.join(process.cwd(), 'src', "configuration", "configuration.json");

    let contents = await fs.readFile(cfgFilePath, "utf8");

    const configuration = JSON.parse(contents);

    const aboutMeMDFile = path.join(process.cwd(), configuration.aboutMeMarkdownFilePath);

    let aboutMeMD = await fs.readFile(aboutMeMDFile, "utf8");

    return {
        props: {
            configuration: configuration,
            aboutMeText: aboutMeMD
        }
    };
};


export default Home

interface HomeProps {
    configuration: Configuration;
    aboutMeText: string;
    smoothScrollTo?: (elementId: string) => void;
}
