import React, { useContext, useEffect, useState } from 'react'
import { useRealmApp } from '../Realm'

const MongoDBContext = React.createContext(null)

const Index = ({ children }) => {
    const { user } = useRealmApp()
    const [ db, setDb ] = useState(null)

    useEffect(() => {
        if (user !== null) {
            const realmService = user.mongoClient('mongodb-atlas')
            setDb(realmService.db('website'))
        }
    }, [ user ])

    const fetchTranslations = async ({ language }) => {
        const info = await db.collection('info').findOne({ language })
        return info
    }

    return (
        <MongoDBContext.Provider value={{ db, fetchTranslations }}>
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

export default Index
