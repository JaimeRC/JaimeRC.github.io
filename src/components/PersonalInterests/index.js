import './styles.css'
import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';

function Hobbies(props) {
    const { translate: { interests } } = useContext(LanguageContext)
    return (
        <div className={'row my-5 mx-auto'}>
        <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
        <div className={'col-sm-10 col-md-10 col-lg-8 col-xl-8'}>
            <h2 className={'fw-bold text-center'}>{'Intereses personales'}</h2>
            <hr className={'mt-1'}/>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{ backgroundImage: `url(${interests[0].url})` }}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests[0].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{ backgroundImage: `url(${interests[1].url})` }}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests[1].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{ backgroundImage: `url(${interests[2].url})` }}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests[2].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{ backgroundImage: `url(${interests[3].url})` }}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests[3].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{ backgroundImage: `url(${interests[4].url})` }}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests[4].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 px-0">
                    <button className={'imageWrapper w-100 border-0'}>
                        <div className={'imageSrc'} style={{ backgroundImage: `url(${interests[5].url})` }}/>
                        <div className={'imageBackdrop'}/>
                        <div className={'imageButton'}>
                            <label color="inherit" className={'imageTitle fw-bold'}>
                                {interests[5].title.toUpperCase()}
                            </label>
                        </div>
                    </button>
                </div>
            </div>

        </div>
        <div className={'col-sm-1 col-md-1 col-lg-2 col-xl-2'}/>
    </div>)
}

export default Hobbies
