import { Routes, Route } from "react-router-dom";
import {
    NavBar,
    Home,
    CryptoCurrencies,
    Exchanges,
    News,
    CryptoDetails,
    Footer,
} from "./components";
const App = () => {
    return (
        <div className='h-screen w-full'>
            <div className='flex h-full'>
                <NavBar />
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/exchange' element={<Exchanges />} />
                        <Route
                            path='/cryptocurrencies'
                            element={<CryptoCurrencies />}
                        />
                        <Route
                            path='/crypto/:cryptoid'
                            element={<CryptoDetails />}
                        />
                        <Route path='/news' element={<News />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
