import './styles.css'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Home from "./components/Welcome";
import PersonalInterest from './components/PersonalInterests'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <Experiences/>
            <PersonalInterest/>
        </div>
    );
}

export default App;
