import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {useImages} from "../../../../context/ImagesProvider";
import './styles.css'

export const CardExperience = (work, index) => {
    const {images: {experiences}} = useImages()

    return (
        <div className={`card cardExperience my-5 ${work.isActive && 'isActive'}`} key={`experience_${index}`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={experiences[work.companyLogo]}
                         alt={work.company} className={'companyImage'}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className={'fw-bold text-left'}>{work.title}</h3>
                        <div className={'row'}>
                            <div className={'col-7'}>
                                <h5>{work.company}</h5>
                            </div>
                            <div className={'col-5 text-end'}>
                                <FontAwesomeIcon icon={faMapMarkedAlt} className={'mx-2'}
                                                 data-bs-toggle={`tooltip_place_${index}`}
                                                 data-bs-placement="top"
                                                 title={work.place} style={{cursor: 'pointer'}}/>
                                <FontAwesomeIcon icon={faCalendar} className={'mx-2'}
                                                 data-bs-toggle={`tooltip_time_${index}`}
                                                 data-bs-placement="top" style={{cursor: 'pointer'}}
                                                 title={`${work.from} ${work.to ? `- ${work.to}` : ''}`}/>
                            </div>
                        </div>
                        <h6 className={'text-left'}>{work.description}</h6>
                        <ul>
                            {work.tasks.map((task, index) => <li key={`task-${index}`} className={'pt-1'}>{task}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
