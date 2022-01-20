import React, {useContext, useEffect, useState} from 'react'
import {useRealmApp} from '../Realm'

const MongoDBContext = React.createContext(null)

const MongoDB = ({children}) => {
    const {user} = useRealmApp()
    const [db, setDb] = useState(null)

    useEffect(() => {
        if (user !== null) {
            const realmService = user.mongoClient(process.env.REACT_APP_MONGO_CLIENT)
            setDb(realmService.db(process.env.REACT_APP_MONGO_DB))
        }
    }, [user])

    const fetchTranslations = async ({language}) => {
        const info = await db.collection(process.env.REACT_APP_MONGO_COLLECTION_TRANSLATIONS).findOne({language})
        return info
    }

    const fetchImages = () => db.collection(process.env.REACT_APP_MONGO_COLLECTION_IMAGES).findOne()

    return (
        <MongoDBContext.Provider value={{db, fetchTranslations, fetchImages}}>
            {children}
        </MongoDBContext.Provider>
    )
}

export const useMongoDB = () => {
    const mdbContext = useContext(MongoDBContext)
    if (mdbContext == null) {
        throw new Error('useMongoDB() called outside of a MongoDB?')
    }
    return mdbContext
}

export default MongoDB
