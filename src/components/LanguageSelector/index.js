import React from 'react'
import './styles.css'
import {useTranslations} from '../../context/LanguageProvider';
import {useImages} from "../../context/ImagesProvider";

function LanguageSelector() {
    const {language, updateLanguage} = useTranslations()
    const {images: {lang}} = useImages()

    return (
        <div className="language">
            {language === 'es'
                ? <div onClick={() => updateLanguage('en')}>
                    <img className={'languageFlagImg'}
                         src={lang[language]} alt={'english'}/>
                </div>
                : <div onClick={() => updateLanguage('es')}>
                    <img className={'languageFlagImg'}
                         src={lang[language]} alt={'spanish'}/>
                </div>
            }
        </div>
    )
}

export default LanguageSelector
