import React from 'react'
import {useTranslations} from '../../context/LanguageProvider';
import Layout from '../Layout'
import {CardTraining} from './components/cardTraining'

function Training() {
    const {translate: {training, educations}} = useTranslations()
    return (
        <Layout className={'mb-4'}>
            <h2 className={'fw-bold text-center'}>{training.title}</h2>
            <hr className={'mt-1'}/>
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-4">
                {Object.keys(educations).map((_company, index) => {
                    return <CardTraining company={educations[_company]} index={index} key={`card-training-${index}`}/>
                })}
            </div>
        </Layout>
    )
}

export default Training
