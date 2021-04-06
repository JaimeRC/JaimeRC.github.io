import {personal} from '../../data/profile'

function Information(props) {
    return (
        <div className={"row my-5 mx-auto"}>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
            <div className={"col-sm-10 col-md-10 col-lg-8 col-xl-8"}>
                <h2 className={"fw-bold text-center"}>{"Información personal"}</h2>
                <hr className={"mt-1"}/>
                <div className={"row mt-5"}>
                    <div className={"col-sm-12 col-md-12 col-lg-3 col-xl-3"}>
                        <img
                            src={process.env.PUBLIC_URL + personal.foto}
                            className="img-thumbnail border-0 rounded-pill"
                            alt="imagen personal"
                        />
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-9 col-xl-9"}>
                        <h2 className={"fw-bold text-left"}>{`${personal.name} ${personal.surname}`}</h2>
                        <h4 className={"fw-bold text-left"}>{personal.title}</h4>
                        <h6 className={"text-left"}>{personal.description}</h6>
                    </div>
                </div>
            </div>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
        </div>
    )
}
export default Information
