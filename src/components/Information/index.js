import {personal} from '../../profile'

export default function (props) {
    return (
        <div className={"row"}>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
            <div className={"col-sm-10 col-md-10 col-lg-8 col-xl-8"}>
                <h2 className={"fw-bold text-center"}>{"Información personal"}</h2>
                <hr className={"mt-1"}/>
                <div className={"row"}>
                    <div className={"col-sm-12 col-md-12 col-lg-4 col-xl-4"}>
                        <img
                            src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            className="img-thumbnail rounded-circle"/>
                    </div>
                    <div className={"col-sm-12 col-md-12 col-lg-8 col-xl-8"}>
                        <h2 className={"fw-bold text-left"}>{`${personal.name} ${personal.surname}`}</h2>
                        <h4 className={"fw-bold text-left"}>{personal.title}</h4>
                        <h6 className={"fw-bold text-left"}>{personal.description}</h6>
                    </div>
                </div>
            </div>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-2"}/>
        </div>
    )
}
