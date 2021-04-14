import './styles.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Welcome from './components/Welcome';
import PersonalInterest from './components/PersonalInterests'
import Education from './components/Education';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Welcome/>
            <About/>
            <Experiences/>
            <Education/>
            <PersonalInterest/>
        </div>
    );
}

export default App;
