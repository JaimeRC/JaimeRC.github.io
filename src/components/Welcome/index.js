import {personal} from "../../data/profile";
import './styles.css'

export default function () {
    return (
            <div className={"row mt-5 home-image"}>
                <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-4"}/>
                <div className={"col-sm-10 col-md-10 col-lg-6 col-xl-4 text-white"}>
                    <h1 className={"fw-bold text-center"}>{"Welcome"}</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example
                        based on Apple’s marketing pages.</p>
                </div>
                <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-4"}/>
            </div>
    )
}
