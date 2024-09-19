import { personal } from '../data/images.json'
import { getI18N } from "../i18n/utils.ts";
import type { JsonLD } from "../types";

export const getJsonLD = (lang: string, canonical: string) => {
    const { jsonLD } = getI18N(lang)
    const { blog, webPage } = jsonLD as JsonLD
    return {
        BlogPosting: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': canonical,
            },
            headline: blog.headline,
            description: blog.description,
            image: personal,
            articleSection: blog.articleSection,
            articleBody: blog.articleBody,
            inLanguage: lang,
            isFamilyFriendly: 'true',
            copyrightYear: new Date().getFullYear(),
            contentLocation: {
                '@type': 'Place',
                'name': 'Málaga, Andalucia - Spain'
            },
            author: {
                '@type': 'Person',
                name: 'Jaime RC',
                url: canonical
            },
            publisher: {
                '@type': 'Person',
                name: 'Jaime RC',
                logo: {
                    '@type': 'ImageObject',
                    url: `${canonical}/favicon.ico`,
                },
            },
            datePublished: new Date().toISOString(),
            dateModified: new Date()?.toISOString(),
            genre: ['SEO', 'JSON-LD'],
        },
        WebPage: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: canonical,
            inLanguage: lang,
            name: webPage.name,
            description: webPage.description,
            mainEntity: {
                '@type': 'WebSite',
                url: canonical,
                name: 'JaimeRC'
            }
        },
        WebSite: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: canonical,
            name: 'JaimeRC',
            publisher: {
                '@type': 'Organization',
                name: 'JaimeRC'
            },
            mainEntity: {
                '@type': 'Organization',
                name: 'JaimeRC'
            }
        }
    }
}