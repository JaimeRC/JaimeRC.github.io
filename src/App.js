import React from 'react'
import './styles.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Welcome from './components/Welcome';
import Hobbies from './components/Hobbies'
import Training from './components/Training';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Welcome/>
            <About/>
            <Experiences/>
            <Training/>
            <Hobbies/>
            <Footer/>
        </div>
    );
}

export default App;
