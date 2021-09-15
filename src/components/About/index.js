import React from 'react'
import './styles.css'
import Layaut from '../Layout'
import { useTranslations } from '../../context/LanguageProvider';

function About(props) {
    const { translate: { about, skills, frameworks } } = useTranslations()
    return (
        <Layaut className={'pt-5'}>
            <h2 className={'fw-bold text-center'}>{about.title}</h2>
            <hr className={'mt-1'}/>
            <div className={'row'}>
                <div className={'col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-lg-5'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <img
                                src={about.foto}
                                className="img-thumbnail p-0 rounded"
                                alt="imagen personal"
                            />
                        </div>
                    </div>
                    <div className={'row py-3'}>
                        <div className={'col-12'}>
                            <h2 className={'fw-bold text-left'}>{`${about.name} ${about.surname}`}</h2>
                            <h4 className={'fw-bold text-left'}>{about.profession}</h4>
                            <h6 className={'text-left'}>{about.description}</h6>
                        </div>
                    </div>
                </div>
                <div className={'col-sm-12 col-md-12 col-lg-6 col-xl-6 ps-lg-5'}>
                    <div className={'row'}>
                        <div className={'col'}>
                            {skills.map((skill, index) => {
                                return (<div className="progress my-3" key={`skill_${index}`}>
                                    <div className="progress-bar" role="progressbar"
                                         style={{ 'width': skill.percentage + '%' }}
                                         aria-valuenow={skill.percentage} aria-valuemin="0"
                                         aria-valuemax="100">
                                    </div>
                                    <span className="progress-type">{skill.skill}</span>
                                    <span className="progress-completed">{`${skill.percentage} %`}</span>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            {frameworks.map(({ image, name, width }, index) => {
                                return <img key={`framework_${index}`}
                                            height={40} width={width || 40}
                                            src={image}
                                            alt={name}
                                            data-bs-toggle={'tooltip' + index}
                                            data-bs-placement="top"
                                            title={name}
                                            className={'rounded-pill m-1'}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layaut>
    )
}

export default About
