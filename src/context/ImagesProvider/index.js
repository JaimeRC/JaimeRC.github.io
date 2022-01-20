import React, {useContext, useEffect, useState} from 'react'
import {useMongoDB} from '../MongoDB'

const ImagesContext = React.createContext({images: {}})

const ImagesProvider = ({children}) => {
    const {db, fetchImages} = useMongoDB()
    const [images, setImages] = useState({})

    useEffect(() => {
        const resolve = async () => {
            if (!db) return
            const newImages = await fetchImages()
            setImages(newImages)
        }
        resolve()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <ImagesContext.Provider value={{images}}>
            {Object.keys(images).length && children}
        </ImagesContext.Provider>
    )
}

export const useImages = () => {
    const imagesContext = useContext(ImagesContext)
    if (imagesContext == null) {
        throw new Error('useImages() called outside of a RealmApp?')
    }
    return imagesContext
}

export default ImagesProvider


