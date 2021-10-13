import {ProjectType} from "./ProjectType";
import {ProjectStatus} from "./ProjectStatus";

export default interface Project {
    name: string;
    type: ProjectType;
    repositoryOwner: string;
    repositoryName: string;
    status: ProjectStatus;
    description: string;
}

