import Section from "../components/Section";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {Link, Tooltip, Typography, Box, createStyles, Theme} from "@mui/material";
import {ClassNameMap, makeStyles } from "@mui/styles";

const useStyles: () => ClassNameMap = makeStyles((theme: Theme) => createStyles({
    markdown: {
        fontFamily: "Sora",
        textAlign: "center"
    }
}));

export default function AboutMeSection(props: { text: string }) {
    return <Section id={"about-me"} title={"About Me"}>
        <Box alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
            <ReactMarkdown className={useStyles().markdown} transformLinkUri={null} children={props.text}
                components={{
                    a: (node, ...props) => <Tooltip title={<Typography variant="caption">Open {node.href} in new window</Typography>}>
                        <Link target={"_blank"} href={node.href}>{node.children[0]}</Link>
                    </Tooltip>

                }
                }
            />
        </Box>
    </Section>
}