import React from 'react'
import './styles.css'
import { useTranslations } from '../../context/LanguageProvider';

function LanguageSelector() {
    const { language, updateLanguage } = useTranslations()
    return (
        <div className="language">
            {language === 'es'
                ? <div onClick={() => updateLanguage('en')}>
                    <img className={'languageFlagImg'}
                         src="https://drive.google.com/uc?id=1DBqAkXXUcoVyeWik5CQTOJ_Ay0Lc9em7&export=download" alt={'english'}/>
                </div>
                : <div onClick={() => updateLanguage('es')}>
                    <img className={'languageFlagImg'}
                         src="https://drive.google.com/uc?id=1YVghyLfwSYhFH6yUaVWlx6UVTmhANmcl&export=download" alt={'spanish'}/>
                </div>
            }
        </div>
    )
}

export default LanguageSelector
