import './styles.css'
import {about, skills} from '../../data'

function About(props) {
      return (
        <div className={"row my-5 mx-auto"}>
                        <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
                        <div className={"col-sm-10 col-md-10 col-lg-8 col-xl-8"}>
                            <h2 className={"fw-bold text-center"}>{"Sobre mí"}</h2>
                            <hr className={"mt-1"}/>
                            <div className={"row mt-5"}>
                                <div className={"col-sm-12 col-md-12 col-lg-5 col-xl-5"}>
                                    <img
                                        src={process.env.PUBLIC_URL + about.foto}
                                        className="img-thumbnail border-0 rounded-pill"
                                        alt="imagen personal"
                                    />

                                </div>
                                <div className={"col-sm-12 col-md-12 col-lg-7 col-xl-7 px-5"}>
                                    <h2 className={"fw-bold text-left"}>{`${about.name} ${about.surname}`}</h2>
                                    <h4 className={"fw-bold text-left"}>{about.title}</h4>
                                    <h6 className={"text-left"}>{about.description}</h6>
                                </div>
                            </div>
                            <div className={"row mt-5"}>
                                <div className={"col-sm-12 col-md-12 col-lg-3 col-xl-3"}/>
                                <div className={"col-sm-12 col-md-12 col-lg-6 col-xl-6"}>
                                    {skills.map((skill, index) => {
                                        return (
                                            <div className="progress my-3">
                                                <div className="progress-bar" role="progressbar" style={{"width": skill.percentage + "%"}}
                                                     aria-valuenow={skill.percentage} aria-valuemin="0"
                                                     aria-valuemax="100">
                                                </div>
                                                <span className="progress-type">{skill.skill}</span>
                                                <span className="progress-completed">{`${skill.percentage} %`}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={"col-sm-12 col-md-12 col-lg-3 col-xl-3"}/>
                            </div>
                        </div>
                        <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
        </div>
    )
}

export default About
