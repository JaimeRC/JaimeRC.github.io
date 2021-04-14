import './styles.css'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">{'Jaime Rubio'}</a>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="navbar-nav me-auto"/>
                    <form className="d-flex">
                        <ul className="navbar-nav me-2">
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
                    </form>
                </div>
            </div>
        </nav>)
}

export default Navbar
