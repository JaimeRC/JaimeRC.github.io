export type Educations = {
    skylabcoder: Company;
    ieslarosaleda: Company;
    mongodb: Company;
    A2SECURE: Company;
    udemy: Company;
}

export type Company = {
    name: string;
    website: string;
    image: 'skylabcoders' | 'ieslarosaleda' | 'mongodb' | 'a2secure' | 'udemy';
    city: string;
    courses: Array<{
        title: string;
        website?: string;
        certificate?: string;
        urlCertificate?: string
        from: number | string;
        to: number | string;
        city?: string;
        description?: string;
    }>
}

export type Work = {
    title: string;
    company: string;
    companyLogo: 'formarketer' | 'modis' | 'nixi1' | 'grupo_hotusa' | 'ocasionplus';
    description?: string;
    place?: string;
    remote?: boolean;
    tasks: string[];
    from: string;
    to?: string;
    isActive?: boolean;
}

export type Interests = {
    diving: string;
    travelling: string;
    trekking: string;
    snowing: string;
    running: string;
    reading: string;
}

export type Hobby = {
    url: 'diving' | 'travelling' | 'trekking' | 'snowing' | 'running' | 'reading';
    title: string;
    width: string
}

export type  Frameworks = {
    image: "aws" | "java" | "mocha" | "chaijs" | "sinonjs" | "expressjs" | "jsonwebtoken" | "passport" | "pino" | "swagger" | "rabbitmq" | "zeromq" | "socketcluster" | "npm" | "mongoose" | "github" | "gitlab" | "bootstrap" | "bulma" | "materialize" | "webstorm" | "trello" | "jira" | "scrum" | "salesforce",
    name: string
    width?: number
}

export type FrameworksImg = {
    aws: string;
    java: string;
    mocha: string;
    chaijs: string;
    sinonjs: string;
    expressjs: string;
    jsonwebtoken: string;
    passport: string;
    pino: string;
    swagger: string;
    rabbitmq: string;
    zeromq: string;
    socketcluster: string;
    npm: string;
    mongoose: string;
    github: string;
    gitlab: string;
    bootstrap: string;
    bulma: string;
    materialize: string;
    webstorm: string;
    trello: string;
    jira: string;
    scrum: string;
    salesforce: string;
}


export type JsonLD = {
    blog: {
        headline: string;
        description: string;
        articleSection: string;
        articleBody: string;
    };
    webPage: {
        name: string
        description: string
    }
}