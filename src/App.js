import './styles.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Welcome from './components/Welcome';
import PersonalInterest from './components/PersonalInterests'
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Welcome/>
            <About/>
            <Experiences/>
            <Education/>
            <PersonalInterest/>
            <Footer/>
        </div>
    );
}

export default App;
