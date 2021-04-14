import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { LanguageProvider } from './components/LanguageProvider'
import { fetchTranslations } from './api'

ReactDOM.render(
    <React.StrictMode>
        <LanguageProvider fetchTranslations={fetchTranslations}>
            <App/>
        </LanguageProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
