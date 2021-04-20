import * as RealmWeb from 'realm-web'
import React, { useContext, useState, useEffect } from 'react'

const RealmAppContext = React.createContext(null)

const RealmApp = ({ children }) => {
    const app = new RealmWeb.App({ id: process.env.REACT_APP_REALM_APP_ID })
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const logIn = async (email, password) => {
            const credentials = RealmWeb.Credentials.anonymous()
            try {
                await app.logIn(credentials)
                setUser(app.currentUser)
                return app.currentUser
            } catch (e) {
                setUser(null)
                return null
            }
        }
        logIn()
    },[])

    const logOut = () => {
        if (user !== null) {
            app.currentUser.logOut()
            setUser(null)
        }
    }

    return (
        <RealmAppContext.Provider value={{ logOut, user }}>
            {children}
        </RealmAppContext.Provider>
    )
}

export const useRealmApp = () => {
    const realmContext = useContext(RealmAppContext)
    if (realmContext == null) {
        throw new Error('useRealmApp() called outside of a RealmApp?')
    }
    return realmContext
}

export default RealmApp
