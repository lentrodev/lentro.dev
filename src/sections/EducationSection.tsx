import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Link, Tooltip, Typography} from "@mui/material";
import Section from "../components/Section";
import React from "react";
import PropsWithConfiguration from "../utils/PropsWithConfiguration";
import {isMobile} from "react-device-detect";

export default function EducationSection(props: PropsWithConfiguration) {

    return <Section id={"education"} title={"My Education"}>
        <Timeline position="right" sx={isMobile ? {ml: "1vw", mr: "1vw"} : {ml: "10vw", mr: "10vw"}}>
            {props.configuration.education.map((education, index) => (
                <TimelineItem key={`education-${education.fromYear}-${education.toYear ?? "present"}`}>
                    <TimelineContent>
                        <Tooltip title={<Typography variant={"caption"}>Open official institution website</Typography>}>
                            <Link href={education.link} target={"_blank"}>
                                <Typography>
                                    {education.name}
                                </Typography>
                            </Link>
                        </Tooltip>
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        {props.configuration.education.length - index != 1 ?
                            <TimelineConnector sx={{height: 160}}/>
                            : <></>}
                    </TimelineSeparator>
                    <TimelineOppositeContent align={"center"} color="text.secondary">
                        <Typography align={"center"}>
                            From {education.fromYear} To {education.toYear ?? "Present"}
                        </Typography>
                        <br/>
                        <Typography  align={"center"}>
                            Faculty: {"IT Techologies"}
                        </Typography>
                    </TimelineOppositeContent>
                </TimelineItem>
            ))}
        </Timeline>
    </Section>;
}