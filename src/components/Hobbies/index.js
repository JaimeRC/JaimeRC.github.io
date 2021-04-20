import './styles.css'
import {useContext} from 'react';
import {LanguageContext} from '../../context/LanguageProvider';
import Layaut from '../Layout'

function Hobbies(props) {
    const {translate: {interests}} = useContext(LanguageContext)
    return (
        <Layaut className={'bg-light'}>
            <h2 className={'fw-bold text-center'}>{interests.title}</h2>
            <hr className={'mt-1'}/>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{backgroundImage: `url(${interests.hobbies[0].url})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests.hobbies[0].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{backgroundImage: `url(${interests.hobbies[1].url})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests.hobbies[1].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{backgroundImage: `url(${interests.hobbies[2].url})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests.hobbies[2].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{backgroundImage: `url(${interests.hobbies[3].url})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests.hobbies[3].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{backgroundImage: `url(${interests.hobbies[4].url})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests.hobbies[4].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{backgroundImage: `url(${interests.hobbies[5].url})`}}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests.hobbies[5].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>
            </div>
        </Layaut>)
}

export default Hobbies
