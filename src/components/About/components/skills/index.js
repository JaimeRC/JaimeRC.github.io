import {useTranslations} from "../../../../context/LanguageProvider";

export const Skills = ()=>{
    const {translate: { skills}} = useTranslations()

    return (
        <div className={"row mt-5"}>
            <div className={'col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-lg-5'}>
                <div className={'row'}>
                    <div className={'col'}>
                        {skills.slice(0, 5).map((skill, index) => {
                            return (<div className="progress my-3" key={`skill_${index}`}>
                                <div className="progress-bar" role="progressbar"
                                     style={{'width': skill.percentage + '%'}}
                                     aria-valuenow={skill.percentage} aria-valuemin="0"
                                     aria-valuemax="100">
                                </div>
                                <span className="progress-type">{skill.skill}</span>
                                <span className="progress-completed">{`${skill.percentage} %`}</span>
                            </div>)
                        })}
                    </div>
                </div>

            </div>
            <div className={'col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-lg-5'}>
                <div className={'row'}>
                    <div className={'col'}>
                        {skills.slice(5, 10).map((skill, index) => {
                            return (<div className="progress my-3" key={`skill_${index}`}>
                                <div className="progress-bar" role="progressbar"
                                     style={{'width': skill.percentage + '%'}}
                                     aria-valuenow={skill.percentage} aria-valuemin="0"
                                     aria-valuemax="100">
                                </div>
                                <span className="progress-type">{skill.skill}</span>
                                <span className="progress-completed">{`${skill.percentage} %`}</span>
                            </div>)
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
