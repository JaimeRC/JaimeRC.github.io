import React, { useState, createContext, useCallback, useEffect, useRef } from 'react'

export const LanguageContext = createContext({ language: 'es', translate: {}, updateLanguage: () => {} })

export const LanguageProvider = ({ children, fetchTranslations }) => {
    const [ { language, translate }, setLanguage ] = useState({ language: 'es', translate: {} })
    const initialTextsLoaded = useRef(false)

    const updateLanguage = useCallback(
        async (newLang) => {
            if (initialTextsLoaded.current && newLang === language) return
            const newTranslate = await fetchTranslations({ language: newLang })
            initialTextsLoaded.current = true
            setLanguage({ language: newLang, translate: newTranslate })
        },
        [ language, fetchTranslations ])

    useEffect(() => {
        updateLanguage(language)
    }, [ language, updateLanguage ])

    const context = {
        language,
        translate,
        updateLanguage: updateLanguage
    }

    return (
        <LanguageContext.Provider value={context}>
            {Object.keys(translate).length && children}
        </LanguageContext.Provider>
    )
}
