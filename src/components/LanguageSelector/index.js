import { useContext } from 'react';
import './styles.css'
import { LanguageContext } from '../LanguageProvider';

function LanguageSelector() {
    const { translate } = useContext(LanguageContext)
    return (
        <>
            <li className="nav-item">
                <div className="languageFlag">
                    <a className="first" href="">
                        <img className={'languageFlagImg'} src="https://node01.flagstat.net/image/drapeau-france.png"/>
                    </a>
                    <a className="second" href="">
                        <img className={'languageFlagImg'}
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"/>
                    </a>
                </div>
            </li>
        </>
    )
}

export default LanguageSelector
