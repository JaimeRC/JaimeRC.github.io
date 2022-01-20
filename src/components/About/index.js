import React from 'react'
import './styles.css'
import Layaut from '../Layout'
import {useTranslations} from '../../context/LanguageProvider';
import {Profile} from './components/profile'
import {Skills} from './components/skills'
import {Frameworks} from './components/frameworks'

function About() {
    const {translate: {about}} = useTranslations()
    return (
        <Layaut className={'pt-4'}>
            <h2 className={'fw-bold text-center'}>{about.title}</h2>
            <hr className={'mt-1 mb-5'}/>
            <Profile/>
            <Skills/>
            <Frameworks/>
            <div className={'mt-4'}/>
        </Layaut>
    )
}

export default About
