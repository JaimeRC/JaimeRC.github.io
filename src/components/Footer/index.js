import React from 'react'
import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {useTranslations} from '../../context/LanguageProvider';

function Footer() {
    const {translate: {about}} = useTranslations()
    return (
        <div className="footer">
            <div className="container py-5">
                <div className="row pb-2">
                    <div className="col-4 text-center">
                        <a
                            rel="noreferrer"
                            className="mx-5 text-light"
                            href="https://github.com/JaimeRC"
                            target="_blank">
                            <FontAwesomeIcon icon={faGithub} className={'fa-2x margin'}/>
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a
                            className="mx-5 text-light"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/jaimerubiocaballero/"
                            target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className={'fa-2x margin'}/>
                        </a>

                    </div>
                    <div className="col-4 text-center">
                        <a
                            rel="noreferrer"
                            className="mx-5 text-light"
                            href="https://es.stackoverflow.com/users/100834/planta4"
                            target="_blank">
                            <FontAwesomeIcon icon={faStackOverflow} className={'fa-2x margin'}/>
                        </a>
                    </div>
                </div>
                <div className="line"/>
                <div className="row pt-2">
                    <div className="col-12 text-center">
                        <label>{`${about.name} ${about.surname} ©${(new Date()).getFullYear()}`}</label>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer
