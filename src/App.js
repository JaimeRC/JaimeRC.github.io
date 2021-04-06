import Navbar from "./components/Navbar";
import Information from "./components/Information";
import Experiences from "./components/Experiences";
import Home from "./components/Welcome";
import PersonalInterest from './components/PersonalInterests'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Information/>
            <Experiences/>
            <PersonalInterest/>
        </div>
    );
}

export default App;
