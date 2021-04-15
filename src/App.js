import './styles.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Welcome from './components/Welcome';
import Hobbies from './components/Hobbies'
import Training from './components/Training';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Welcome/>
            <About/>
            <Experiences/>
            <Training/>
            <Hobbies/>
        </div>
    );
}

export default App;
