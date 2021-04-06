import {experiences} from '../../data/profile'
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Experiences(props) {
    console.log(process.env.PUBLIC_URL)
    return (
        <div className={"row py-5 bg-light mx-auto"}>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
            <div className={"col-sm-10 col-md-10 col-lg-8 col-xl-8"}>
                <h2 className={"fw-bold text-center"}>{"Experiencia Profesional"}</h2>
                <hr className={"mt-1"}/>
                {experiences.map((work, index) => {
                    return (
                        <div className={"row mt-5"} key={`work-${index}`}>
                            <div className={"col-sm-12 col-md-12 col-lg-3 col-xl-3"}>
                                <img src={process.env.PUBLIC_URL + work.companyLogo}
                                     className="img-thumbnail border-2 border-light rounded-pill"
                                     alt={work.company}/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-9 col-xl-9"}>
                                <h3 className={"fw-bold text-left"}>{work.title}</h3>
                                <div className={"row"}>
                                    <div className={"col-8"}>
                                        <h5 className={"fw-bold"}>{`${work.company} (${work.place})`}</h5>
                                    </div>
                                    <div className={"col-4 text-end"}>
                                        <label>
                                            <FontAwesomeIcon icon={faClock} className={"mx-2"}/>
                                            {`${work.from} ${work.to ? `- ${work.to}` : ''}`}
                                        </label>
                                    </div>
                                </div>
                                <h6 className={"text-left"}>{work.description}</h6>
                                <ul>
                                    {work.tasks.map((task, index) => <li key={`task-${index}`}>{task}</li>)}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
        </div>
    )
}
