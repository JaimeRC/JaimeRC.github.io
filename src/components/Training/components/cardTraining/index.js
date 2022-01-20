import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {useImages} from "../../../../context/ImagesProvider";
import './styles.css'

export const CardTraining = ({company, index}) => {
    const {images: {training}} = useImages()
    const [active, setActive] = useState(false)
    const {image, name, website, city, courses} = company

    return (
        <div className="col">
            <div className={`card cardTraining ${active ? "activeCard" : ''}`}>
                <div className={"companyImg"}>
                    <img src={training[image]} alt={name}/>
                </div>
                <div className="accordion accordion-flush border-top"
                     id={`accordionFlush-${index}`}>
                    <div className="accordion-item ">
                        <span className="accordion-header" id={`flush-heading-${index}`}>
                            <button className="accordion-button collapsed px-4 py-2 border-bottom-5" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse-${index}`}
                                    aria-expanded="false"
                                    aria-controls={`flush-collapse-${index}`}
                                    onClick={() => setActive(!active)}>
                                <div>
                                    <span>
                                        <a rel="noreferrer"
                                           href={website}
                                           target="_blank"
                                           className="link-success">
                                        <h5 className="card-title">{name}</h5>
                                        </a>
                                    </span>
                                    <span>{city}</span>
                                </div>
                            </button>
                        </span>
                        <div id={`flush-collapse-${index}`}
                             className="accordion-collapse collapse"
                             aria-labelledby={`flush-heading-${index}`}
                             data-bs-parent={`#accordionFlush-${index}`}>
                            <div className="accordion-body">
                                <ul className="list-group list-group-flush">
                                    {courses.map((course, _index) => {
                                        return (
                                            <li className="list-group-item"
                                                key={`task-${_index}`}>
                                                <div className={'row'}>
                                                    <div className={'col-10'}>
                                                        {course.title}
                                                    </div>
                                                    <div className={'col-1'}
                                                         style={{cursor: 'pointer'}}
                                                         data-bs-toggle={'tooltip' + _index}
                                                         data-bs-placement="top"
                                                         title={`${course.from} - ${course.to}`}>
                                                        <FontAwesomeIcon icon={faCalendar}/>
                                                    </div>
                                                    <div className={'col-1'}
                                                         hidden={!course.urlCertificate}>
                                                        <a className={'link-success'}
                                                           rel="noreferrer"
                                                           href={course.urlCertificate}
                                                           target="_blank">
                                                            <FontAwesomeIcon icon={faExternalLinkAlt}/>
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
}
