import './styles.css'
import Canvas from "../Canvas";
import {welcome, about} from "../../data";

function Welcome() {
    return (
        <section className="flex height-fix">
            <div className="canvas">
                <Canvas/>
            </div>
            <div className="flex">
                <div className="text">
                    Hola, soy <span
                    className="highlight">{`${about.name} ${about.surname}`}</span>.
                    <br/>{welcome.subtitle}
                </div>
            </div>
        </section>
    )
}

export default Welcome
