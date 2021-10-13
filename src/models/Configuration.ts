import Project from "./Project";
import Contact from "./Contact";
import Education from "./Education";
import {DevelopmentStack} from "./Skill";

export default interface Configuration {
    appBarTitle: string;
    homeText: string;
    aboutMeMarkdownFilePath: string;
    education: Education[];
    projects: Project[];
    contacts: Contact[];
    skills: DevelopmentStack[];
}