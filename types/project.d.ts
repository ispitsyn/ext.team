interface Project {
    name: string;
    description: string;
    properties: ProjectProperty[];
    team: ProjectTeamMember[];
    stack: ProjectStackItem[];
    tags: ProjectTag[];
    results: ProjectResult[];
}

interface ProjectProperty {
    code: string;
    name: string;
    value: string;
}

interface ProjectTeamMember {
    name: string;
    position: string;
    photo: string;
}

interface ProjectStackItem {
    name: string;
}

interface ProjectTag {
    name: string;
}

interface ProjectResult {
    type: string;
    name: string;
    link: ProjectLink;
}

interface ProjectLink {
    name: string;
    url: string;
}

export {Project}