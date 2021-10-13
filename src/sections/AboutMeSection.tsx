import Configuration from "../models/Configuration";
import Section from "../components/Section";
import ReactMarkdown from "react-markdown";
import {useState} from "react";

export default function AboutMeSection(props: {text: string}){
    return <Section id={"about-me"} title={"About Me"}>
        <ReactMarkdown>
            {props.text}
        </ReactMarkdown>
    </Section>
}