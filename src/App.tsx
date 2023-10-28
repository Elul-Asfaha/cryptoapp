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
import { useEffect, useState } from "react";
const App = () => {
    const [stats, setStats] = useState({
        total: 616,
        total24hVolume: "138577035327",
        totalCoins: 31156,
        totalMarkets: 36493,
        totalExchanges: 164,
        totalMarketCap: "1273225457529",
    });
    // const fetchdata = async () => {
    //     const url =
    //         "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             "X-RapidAPI-Key":
    //                 "d1fd8aa275mshdfbdece75472e69p13a6b7jsnec1cb651fbf3",
    //             "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    //         },
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         setStats(result.data.stats);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // useEffect(() => {
    //     fetchdata();
    // }, []);
    return (
        <div className='h-screen w-full'>
            <div className='flex h-full'>
                <NavBar />
                <div className='w-full'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home displayStatus={stats} />}
                        />
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
