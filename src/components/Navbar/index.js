import './styles.css'
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LanguageSelector from '../LanguageSelector'
import { useTranslations } from '../../context/LanguageProvider';

function Navbar() {
    const { translate: { about } } = useTranslations()
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <label className="navbar-brand">{`${about.name} ${about.surname}`}</label>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="navbar-nav me-auto"/>
                    <form className="d-flex">
                        <ul className="navbar-nav me-2 text-center">
                            <li className="nav-item">
                                <a
                                    rel="noreferrer"
                                    className="text-light nav-link"
                                    href="https://github.com/JaimeRC"
                                    target="_blank"> <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-light"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/jaimerubiocaballero/"
                                    target="_blank"> <FontAwesomeIcon icon={faLinkedin}/>
                                </a>

                            </li>
                            <li className="nav-item">
                                <a
                                    rel="noreferrer"
                                    className="nav-link text-light"
                                    href="https://es.stackoverflow.com/users/100834/planta4"
                                    target="_blank"> <FontAwesomeIcon icon={faStackOverflow}/>
                                </a>
                            </li>
                            <li className="nav-line">
                                <LanguageSelector/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>)
}

export default Navbar
