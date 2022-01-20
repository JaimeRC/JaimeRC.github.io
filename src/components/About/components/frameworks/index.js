import {useTranslations} from "../../../../context/LanguageProvider";
import {useImages} from "../../../../context/ImagesProvider";

export const Frameworks = () => {
    const {translate: {frameworks}} = useTranslations()
    const {images} = useImages()

    return (
        <div className={"row mt-5"}>
            <div className={'col text-center'}>
                {frameworks.map(({image, name, width}, index) => {
                    return <img key={`framework_${index}`}
                                height={40} width={width || 40}
                                src={images.frameworks[image]}
                                alt={name}
                                data-bs-toggle={'tooltip' + index}
                                data-bs-placement="top"
                                title={name}
                                className={'rounded-pill m-2'}/>
                })}
            </div>

        </div>
    )
}
