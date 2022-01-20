import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import LanguageProvider from './context/LanguageProvider'
import RealmApp from './context/Realm'
import MongoDB from './context/MongoDB'
import ImagesProvider from "./context/ImagesProvider";

ReactDOM.render(
    <React.StrictMode>
        <RealmApp>
            <MongoDB>
                <LanguageProvider>
                    <ImagesProvider>
                        <App/>
                    </ImagesProvider>
                </LanguageProvider>
            </MongoDB>
        </RealmApp>
    </React.StrictMode>,
    document.getElementById('root')
);
