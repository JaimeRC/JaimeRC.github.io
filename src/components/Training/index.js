import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useContext} from 'react';
import {faClock, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {LanguageContext} from '../LanguageProvider';
import Layaut from '../Layout'

function Training() {
    const {translate: {training, educations}} = useContext(LanguageContext)
    return (
        <Layaut className={"mb-4"}>
            <h2 className={'fw-bold text-center'}>{training.title}</h2>
            <hr className={'mt-1'}/>
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-4">
                {Object.keys(educations).map((_company, index) => {
                    let company = educations[_company]
                    return (
                        <div className="col" key={`educations_${index}`}>
                            <div className="card">
                                <img src={company.image} className="card-img-top border-bottom"
                                     alt={company.name}/>
                                <div className="row m-2 pt-2">
                                    <div className="col-8">
                                        <a rel="noreferrer"
                                           href={company.website}
                                           target="_blank"
                                           class="link-secondary">
                                            <h5 className="card-title fw-bold">{company.name}</h5>
                                        </a>
                                    </div>
                                    <div className="col-4 text-end">
                                        <p className="card-text align-middle">{company.city}</p>
                                    </div>
                                </div>
                                <div className="accordion accordion-flush border-top"
                                     id={`accordionFlush-${index}`}>
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header" id={`flush-heading-${index}`}>
                                            <button className="accordion-button collapsed p-3" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#flush-collapse-${index}`}
                                                    aria-expanded="false"
                                                    aria-controls={`flush-collapse-${index}`}>
                                                {'Más información'}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse-${index}`}
                                             className="accordion-collapse collapse"
                                             aria-labelledby={`flush-heading-${index}`}
                                             data-bs-parent={`#accordionFlush-${index}`}>
                                            <div className="accordion-body">
                                                <ul className="list-group list-group-flush">
                                                    {company.courses.map((course, _index) => {
                                                        return (
                                                            <li className="list-group-item"
                                                                key={`task-${_index}`}>
                                                                <div className={'row'}>
                                                                    <div className={'col-10'}>
                                                                        {course.title}
                                                                    </div>
                                                                    <div className={'col-1'}
                                                                         data-bs-toggle={'tooltip' + _index}
                                                                         data-bs-placement="top"
                                                                         title={`${course.from} - ${course.to}`}>
                                                                        <FontAwesomeIcon icon={faClock}/>
                                                                    </div>
                                                                    <div className={'col-1'}
                                                                         hidden={!course.urlCertificate}>
                                                                        <a className={"link-success"}
                                                                           rel="noreferrer"
                                                                           href={course.urlCertificate}
                                                                           target="_blank">
                                                                            <FontAwesomeIcon
                                                                                icon={faExternalLinkAlt}/>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </Layaut>
    )
}

export default Training
