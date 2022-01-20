import {useTranslations} from "../../../../context/LanguageProvider";
import {useImages} from "../../../../context/ImagesProvider";

export const Profile = () => {
    const {translate: {about}} = useTranslations()
    const {images} = useImages()

    return (
        <div className={'row'}>
            <div className={'col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-lg-5'}>
                <img
                    src={images[about.foto]}
                    className="img-thumbnail p-0 rounded"
                    alt={about.name}/>
            </div>
            <div className={'col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-lg-5 py-3'}>
                <h4 className={'fw-bold text-left'}>{about.profession}</h4>
                <h6 className={'text-left pt-3'}>{about.description}</h6>
            </div>
        </div>
    )
}
