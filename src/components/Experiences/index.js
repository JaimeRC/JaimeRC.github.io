import {experiences} from '../../data/profile'
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function (props) {
    return (
        <div className={"row"}>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
            <div className={"col-sm-10 col-md-10 col-lg-8 col-xl-8"}>
                <h2 className={"fw-bold text-center"}>{"Experiencia Profesional"}</h2>
                <hr className={"mt-1"}/>
                {experiences.map(work => {
                    return (
                        <div className={"row mt-5"}>
                            <div className={"col-sm-12 col-md-12 col-lg-4 col-xl-4"}>
                                <img
                                    src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                    className="img-thumbnail border-0 rounded-pill"/>
                            </div>
                            <div className={"col-sm-12 col-md-12 col-lg-8 col-xl-8"}>
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
                                    {work.tasks.map(task => <li>{task}</li>)}
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
