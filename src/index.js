import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import LanguageProvider from './context/LanguageProvider'
import RealmApp from './context/Realm'
import MongoDB from './context/MongoDB'

ReactDOM.render(
    <React.StrictMode>
        <RealmApp>
            <MongoDB>
                <LanguageProvider>
                    <App/>
                </LanguageProvider>
            </MongoDB>
        </RealmApp>
    </React.StrictMode>,
    document.getElementById('root')
);
