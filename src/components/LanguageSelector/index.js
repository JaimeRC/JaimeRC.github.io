import { useContext } from 'react';
import './styles.css'
import { LanguageContext } from '../LanguageProvider';

function LanguageSelector() {
    const { language, updateLanguage } = useContext(LanguageContext)
    return (
        <div className="language">
            {language === 'es'
                ? <div onClick={() => updateLanguage('en')}>
                    <img className={'languageFlagImg'} src="/images/foto-en.webp" alt={'english'}/>
                </div>
                : <div onClick={() => updateLanguage('es')}>
                    <img className={'languageFlagImg'}
                         src={'/images/foto-es.jpeg'} alt={'spanish'}/>
                </div>
            }
        </div>
    )
}

export default LanguageSelector
