import React from 'react'
import './styles.css'
import Canvas from '../Canvas';
import { useTranslations } from '../../context/LanguageProvider';

function Welcome() {
    const { translate: { welcome, about } } = useTranslations()
    return (
        <section className="flex height-fix">
            <div className="canvas">
                <Canvas/>
            </div>
            <div className="flex">
                <div className="text">
                    {welcome.title} <span className="highlight">{`${about.name} ${about.surname}`}</span>.
                    <br/>{welcome.subtitle}
                </div>
            </div>
        </section>
    )
}

export default Welcome
