import React from 'react'
import './styles.css'
import {useTranslations} from '../../context/LanguageProvider';

function LanguageSelector() {
    const {language, updateLanguage} = useTranslations()

    return (
        <div className="language">
            {language === 'es'
                ? <div onClick={() => updateLanguage('en')}>
                    <img className={'languageFlagImg'}
                         src={"https://res.cloudinary.com/jaime-rc/image/upload/v1642458004/personal-website/foto-es_rubx03.jpg"} alt={'english'}/>
                </div>
                : <div onClick={() => updateLanguage('es')}>
                    <img className={'languageFlagImg'}
                         src={"https://res.cloudinary.com/jaime-rc/image/upload/v1642458004/personal-website/foto-en_bhpzk7.webp"} alt={'spanish'}/>
                </div>
            }
        </div>
    )
}

export default LanguageSelector
