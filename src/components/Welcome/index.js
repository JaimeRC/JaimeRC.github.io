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
                    <span className="welcomeText">{welcome.title}</span>
                    <span className="highlight">{`${about.name} ${about.surname}`}.</span>
                    <span className="slogan">{welcome.subtitle}</span>
                </div>
            </div>
        </section>
    )
}

export default Welcome
