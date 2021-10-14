import PropsWithConfiguration from "../utils/PropsWithConfiguration";
import {DevelopmentStack, Knowledge, Level} from "../models/Skill";
import Section from "../components/Section";
import TechIcon from "../components/TechIcon";
import {Box, Grid, hexToRgb, Typography} from "@mui/material";


const colorBindings = new Map<Level, string>();

colorBindings.set(Level.Novice, "#e91e63")
colorBindings.set(Level.Beginner, "#f44336")
colorBindings.set(Level.Skillful, "#ffc107")
colorBindings.set(Level.Experienced, "#8bc34a")
colorBindings.set(Level.Expert, "#4caf50")


function getKnowledgeFillColor(knowledgeLevel: Level) {
    return hexToRgb(colorBindings.get(knowledgeLevel)!);
}


function KnowledgeView({knowledge}: { knowledge: Knowledge }) {
    return <Box sx={{width: 96, minHeight: 160}}>

        <TechIcon boxProps={{m: "auto"}} type={knowledge.shortName}/>
        <br/>
        <Typography align={"center"} color="text.secondary">
            {knowledge.title}
        </Typography>
        <Typography align={"center"} variant={"subtitle2"} sx={{color: getKnowledgeFillColor(knowledge.level)}}>
            {Level[knowledge.level]}
        </Typography>
    </Box>;
}

function DevelopmentStackView({devStack}: { devStack: DevelopmentStack }) {
    return <Section inlineTitle={false} title={devStack.title}>
        <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Grid item
                  xs={12}
                  md={6}
            >
                <Section inlineTitle={false} title={"Languages"}>
                    <Grid container columnSpacing={4} rowSpacing={4} alignItems={"flex-start"} justifyContent={"space-around"}>
                        {devStack.languages.map(_ => <Grid key={`language-knowledge-${_.shortName}`} item
                                                           xs={6}
                        >
                            <KnowledgeView knowledge={_}/>
                        </Grid>)}
                    </Grid>
                </Section>
            </Grid>
            <Grid item
                  xs={12}
                  md={6}
            >
                <Section inlineTitle={false} title={"Techologies"}>
                    <Grid container columnSpacing={4} rowSpacing={4} alignItems={"flex-start"} justifyContent={"space-around"}>
                        {devStack.technologies.map(_ => <Grid key={`technology-knowledge-${_.shortName}`} item
                                                              xs={6}
                        >
                            <KnowledgeView knowledge={_}/>
                        </Grid>)}
                    </Grid>
                </Section>
            </Grid>
            <Grid item
                  xs={12}
                  md={6}
            >
                <Section inlineTitle={false} title={"IDEs"}>
                    <Grid container columnSpacing={2} rowSpacing={4} alignItems={"flex-start"} justifyContent={"space-around"}>
                        {devStack.IDEUsed.map(_ => <Grid key={`ide-${_.title.replace(" ", "-")}`} item
                                                         xs={6}
                        >
                            <Box  sx={{width: 96, minHeight: 160}} alignItems={"center"} justifyContent={"center"} alignContent={"center"}>
                                <TechIcon boxProps={{m: "auto"}} type={_.shortName} iconType={_.iconType}/>
                                <br/>
                                <Typography align={"center"} color="text.secondary">
                                    {_.title}
                                </Typography>
                            </Box>
                        </Grid>)}
                    </Grid>
                </Section>
            </Grid>
        </Grid>
    </Section>;
}


export default function SkillsSection({configuration: {skills}}: PropsWithConfiguration) {
    return <Section title={"My Skills"}>
        {skills.map(_ => <DevelopmentStackView key={`stackSection-${_.title}`} devStack={_}/>)}
    </Section>
}