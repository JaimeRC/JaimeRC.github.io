import { ui, showDefaultLang } from './ui';
import { defaultLang, LANG } from "./index.ts";
import spanish from "./es.json";
import english from "./en.json";

export function getLangFromUrl(url: URL): string {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang;
    return defaultLang;
}

export function removeLangFromUrl(url: URL): URL {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) {
        url.pathname = url.pathname.replace(`/${lang}`, '')
       return url;
    }
    return url
}

export function useTranslations(lang: string) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function useTranslatedPath(lang: string) {
    return function translatePath(path: string, l: string = lang) {
        return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
    }
}

export const getI18N = (currentLocale = LANG.SPANISH) => {
    if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
    return spanish;
};