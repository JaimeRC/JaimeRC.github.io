import React, { useState, useCallback, useEffect, useRef, useContext } from 'react'
import { useMongoDB } from '../MongoDB'

const LanguageContext = React.createContext({ language: process.env.REACT_APP_INIT_LANGUAGE, translate: {}, updateLanguage: () => {} })

const LanguageProvider = ({ children }) => {
    const { db, fetchTranslations } = useMongoDB()
    const [ { language, translate }, setLanguage ] = useState({ language: process.env.REACT_APP_INIT_LANGUAGE, translate: {} })
    const initialTextsLoaded = useRef(false)

    const updateLanguage = useCallback(
        async (newLang) => {
            if ((initialTextsLoaded.current && newLang === language) || !db) return
            const newTranslate = await fetchTranslations({ language: newLang })
            initialTextsLoaded.current = true
            setLanguage({ language: newLang, translate: newTranslate })
        },
        [ language, db, fetchTranslations ])

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

export const useTranslations = () => {
    const languageContext = useContext(LanguageContext)
    if (languageContext == null) {
        throw new Error('useTranslations() called outside of a RealmApp?')
    }
    return languageContext
}

export default LanguageProvider
