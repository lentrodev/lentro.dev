export interface Knowledge {
    title: string;
    //Used for displaying icons
    shortName: string;
    level: Level;
}

export enum Level {
    Novice,
    Beginner,
    Skillful,
    Experienced,
    Expert
}

export interface DevelopmentStack {
    title: string;
    languages: Knowledge[];
    technologies: Knowledge[];
    IDEUsed: IDE[];
}

export interface IDE {
    title: string;
    icon: string;
    iconType: string;
    developerLink: string;
}