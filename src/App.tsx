import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import Home from "./components/Home";
const App = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
