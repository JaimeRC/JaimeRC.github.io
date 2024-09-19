import { LANG } from "./index.ts";

export const showDefaultLang = false;

export const ui = {
    [LANG.SPANISH]: {
        'lang.es':'Español',
        'lang.en':'Inglés',
        'meta.title': 'Website de Jaime Rubio',
        'meta.description': 'Website de Jaime Rubio',
        'nav.brand': 'Jaime Rubio',
        'footer.brand': 'Jaime Rubio',
        'welcome.title':'Hola, soy',
        'welcome.subtitle':'desarrollador full-stack',
        'about.me': 'Sobre mí',
        'about.profession':'Full Stack Developer',
        'about.description': 'Curioso que le encantan los retos, constantemente aprendiendo para mantener mis conocimientos al día, en particular, tengo interés por la arquitectura, rendimiento, patrones de diseño, calidad de código y buenas practicas. Me considero una persona proactiva, dinámica, empática y muy alegre.'
    },
    [LANG.ENGLISH]: {
        'lang.es':'Spanish',
        'lang.en':'English',
        'meta.title': 'Website of Jaime Rubio',
        'meta.description': 'Website de Jaime Rubio',
        'nav.brand': 'Jaime Rubio',
        'footer.brand': 'Jaime Rubio',
        'welcome.title':"Hi, i'm",
        'welcome.subtitle':"I'm full-stack developer",
        'about.me': 'About me',
        'about.profession':'Full Stack Developer',
        'about.description': 'Curious that he loves challenges, constantly learning to keep my knowledge up to date, in particular, I have an interest in architecture, performance, design patterns, code quality and good practices. I consider myself a proactive, dynamic, empathetic and very happy person.'
    },
} as const;