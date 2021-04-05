import {faGithub, faStackOverflow, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function (props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="navbar-text text-light">{"Jaime Rubio"}</span>
                    <div className="d-flex">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
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
                                        rel="noreferrer"
                                        className="nav-link text-light"
                                        href="https://es.stackoverflow.com/users/100834/planta4"
                                        target="_blank"> <FontAwesomeIcon icon={faStackOverflow}/>
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
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>)
}

