import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { LanguageProvider } from './context/LanguageProvider'
import RealmApp from './context/Realm'
import Index from './context/MongoDB'

ReactDOM.render(
    <React.StrictMode>
        <RealmApp>
            <Index>
                <LanguageProvider>
                    <App/>
                </LanguageProvider>
            </Index>
        </RealmApp>
    </React.StrictMode>,
    document.getElementById('root')
);
