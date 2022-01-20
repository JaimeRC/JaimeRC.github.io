import React from 'react'
import './styles.css'
import {useTranslations} from '../../context/LanguageProvider';
import Layout from '../Layout'
import {CardExperience} from './components/cardExperience'

export default function Experiences() {
    const {translate: {experiences}} = useTranslations()

    return (
        <Layout className={'bg-light'}>
            <h2 className={'fw-bold text-center'}>{experiences.title}</h2>
            <hr className={'mt-1'}/>
            {experiences.works.map(CardExperience)}
        </Layout>
    )
}
