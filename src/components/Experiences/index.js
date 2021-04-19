import { useContext } from 'react';
import { faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguageContext } from '../LanguageProvider';
import Layaut from '../Layout'


export default function Experiences(props) {
    const { translate: { experiences } } = useContext(LanguageContext)
    return (
        <Layaut className={'bg-light'}>
            <h2 className={'fw-bold text-center'}>{experiences.title}</h2>
            <hr className={'mt-1'}/>
            {experiences.works.map((work, index) => {
                return (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL + work.companyLogo}
                                     alt={work.company} className={"companyImage"}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className={'fw-bold text-left'}>{work.title}</h3>
                                    <div className={'row'}>
                                        <div className={'col-7'}>
                                            <h5 className={'fw-bold'}>{work.company}</h5>
                                        </div>
                                        <div className={'col-5 text-end'}>
                                            <FontAwesomeIcon icon={faMapMarkedAlt} className={'mx-2'}
                                                             data-bs-toggle={`tooltip_place_${index}`}
                                                             data-bs-placement="top"
                                                             title={work.place}/>
                                            <FontAwesomeIcon icon={faClock} className={'mx-2'}
                                                             data-bs-toggle={`tooltip_time_${index}`}
                                                             data-bs-placement="top"
                                                             title={`${work.from} ${work.to ? `- ${work.to}` : ''}`}/>
                                        </div>
                                    </div>
                                    <h6 className={'text-left'}>{work.description}</h6>
                                    <ul>
                                        {work.tasks.map((task, index) => <li key={`task-${index}`}>{task}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Layaut>
    )
}
