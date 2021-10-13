import {Card, CardActions, CardContent, CardHeader, Collapse, Grid, IconButton,} from "@mui/material";
import Section from "../components/Section";
import React, {useEffect} from "react";
import PropsWithConfiguration from "../utils/PropsWithConfiguration";
import Project from "../models/Project";

import ReactMarkdown from "react-markdown";
import {Octokit, RestEndpointMethodTypes} from "@octokit/rest";
import {styled} from "@mui/material/styles";
import {ExpandMoreOutlined} from "@mui/icons-material";


const ExpandMore = styled((props: {
    expand: boolean;
}) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function ProjectItem({project}: { project: Project }) {
    const [open, setIsOpen] = React.useState(false);

    const [readme, setReadme] = React.useState("");
    const [repo, setRepo] = React.useState<RestEndpointMethodTypes["repos"]["get"]["response"]>();

    const [repoImage, setRepoImage] = React.useState("");

    const getProjectInfo = async () => {

        var octokit = new Octokit();

        var result = await octokit.repos.getReadme({
            owner: project.repositoryOwner, repo: project.repositoryName

        });

        let buf = Buffer.from(result.data.content, 'base64');

        let readmeText = buf.toString("utf8");

        setReadme(readmeText);

        let repo = await octokit.repos.get({
            owner: "StrixFramework", repo: "Strix"
        });

        setRepo(repo);

        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(await (await fetch(`https://cors-anywhere.herokuapp.com/${repo.data.html_url}`)).text(), 'text/html');


        let res = htmlDoc.querySelector("meta[property=\"og:image\"]")!.getAttribute("content");

        setRepoImage(res!);

    }

    useEffect(() => {

        if (readme === "" && repo === undefined && repoImage == "") {
            getProjectInfo();
        }
    }, [readme, repo])


    if (repo === undefined) {
        return <></>
    }

    return <Grid item sx={{flexGrow: 1}}>
        <Card sx={{flexGrow: 1}}>
            <CardHeader title={project.name} subheader={repo!.data.description}/>
            {/*<CardActions>*/}
            {/*    <ExpandMore expand={open} onClick={() => setIsOpen(!open)}>*/}
            {/*        <ExpandMoreOutlined/>*/}
            {/*    </ExpandMore>*/}
            {/*</CardActions>*/}
            <Collapse in={open} timeout="auto" unmountOnExit>
                {/*<CardMedia sx={{width: 800, height: 400}} image={repoImage} component="img"/>*/}
                <CardContent>
                    <ReactMarkdown>
                        {readme}
                    </ReactMarkdown>
                </CardContent>
            </Collapse>
        </Card>
    </Grid>
}


export default function ProjectsSection(props: PropsWithConfiguration) {
    return <Section id={"projects"} title={"My Projects"}>
        <Grid container direction={"row"} sx={{flexGrow: 1}}>
            {props.configuration.projects.map((project, index) => <ProjectItem key={`project-${index}`} project={project}/>)}
        </Grid>
    </Section>;
}


