import Navbar from "./components/Navbar";
import Information from "./components/Information";
import Experiences from "./components/Experiences";
import Home from "./components/Welcome";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Information/>
            <Experiences/>
        </div>
    );
}

export default App;
