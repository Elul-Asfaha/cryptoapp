import { Routes, Route } from "react-router-dom";
import {
    NavBar,
    Home,
    CryptoCurrencies,
    Exchanges,
    News,
    CryptoDetails,
} from "./components";
const App = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exchange' element={<Exchanges />} />
                <Route
                    path='/cryptocurrencies'
                    element={<CryptoCurrencies />}
                />
                <Route path='/crypto/:cryptoid' element={<CryptoDetails />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </div>
    );
};

export default App;
