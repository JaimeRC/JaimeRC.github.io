import React from 'react'
import './styles.css'
import {useTranslations} from '../../context/LanguageProvider';
import Layaut from '../Layout'
import {useImages} from "../../context/ImagesProvider";

function Hobbies() {
    const {translate: {interests}} = useTranslations()
    const {images} = useImages()

    const {hobbies} = interests
    return (
        <Layaut className={'bg-light'}>
            <h2 className={'fw-bold text-center'}>{interests.title}</h2>
            <hr className={'mt-1'}/>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'}
                             style={{backgroundImage: `url(${images.interests[hobbies[0].url]})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {hobbies[0].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'}
                             style={{backgroundImage: `url(${images.interests[hobbies[1].url]})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {hobbies[1].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'}
                             style={{backgroundImage: `url(${images.interests[hobbies[2].url]})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {hobbies[2].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'}
                             style={{backgroundImage: `url(${images.interests[hobbies[3].url]})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {hobbies[3].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'}
                             style={{backgroundImage: `url(${images.interests[hobbies[4].url]})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {hobbies[4].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'}
                             style={{backgroundImage: `url(${images.interests[hobbies[5].url]})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {hobbies[5].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>
            </div>
        </Layaut>)
}

export default Hobbies
