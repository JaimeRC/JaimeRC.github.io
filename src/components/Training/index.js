import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';

function Training() {
    const { translate: { training,  educations } } = useContext(LanguageContext)
    return (
        <>
            <div className={'row py-5 mx-auto'}>
                <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
                <div className={'col-sm-10 col-md-10 col-lg-8 col-xl-8'}>
                    <h2 className={'fw-bold text-center'}>{training.title}</h2>
                    <hr className={'mt-1'}/>
                    {training.courses.map((course, index) => {
                        return (
                            <div className={'row mt-5'} key={`work-${index}`}>
                                <div className={'col-sm-12 col-md-12 col-lg-3 col-xl-3'}>
                                    <img src={process.env.PUBLIC_URL + course.companyLogo}
                                         className="img-thumbnail border-2 border-light rounded-pill"
                                         alt={course.company}/>
                                </div>
                                <div className={'col-sm-12 col-md-12 col-lg-9 col-xl-9'}>
                                    <h3 className={'fw-bold text-left'}>{course.title}</h3>
                                    <div className={'row'}>
                                        <div className={'col-8'}>
                                            <h5 className={'fw-bold'}>{`${course.company} ${course.city ? `(${course.city})` : ''}`}</h5>
                                        </div>
                                        <div className={'col-4 text-end'}>
                                            <label>
                                                <FontAwesomeIcon icon={faClock} className={'mx-2'}/>
                                                {`${course.from} ${course.to ? `- ${course.to}` : ''}`}
                                            </label>
                                        </div>
                                    </div>
                                    <h6 className={'text-left'}>{course.description}</h6>

                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
            </div>
            <div className={'row py-5 mx-auto'}>
                <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
                <div className={'col-sm-10 col-md-10 col-lg-8 col-xl-8'}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {Object.keys(educations).map((company, index) => {
                            return (
                                <div className="col" key={`educations_${index}`}>
                                    <div className="card rounded">
                                        <img src={educations[company].image} className="card-img-top border-bottom" alt={educations[company].name}/>
                                        <h5 className="card-title fw-bold pt-2 px-2">{educations[company].name}</h5>
                                        <p className="card-text pb-2 px-2">{educations[company].city}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
            </div>
        </>
    )
}

export default Training
