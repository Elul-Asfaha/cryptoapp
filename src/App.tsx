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
    const [coins, setCoins] = useState([
        {
            Volume: "12882080535",
            btcPrice: "1",
            change: "0.72",
            coinrankingUrl:
                "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
            color: "#f7931A",
            iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
            listedAt: 1330214400,
            lowVolume: false,
            marketCap: "668218858504",
            name: "Bitcoin",
            price: "34221.019476126145",
            rank: 1,
            sparkline: [
                "33968.19334862862",
                "33963.18799950588",
                "33750.7070746055",
                "33610.250781054274",
                "33645.67391975228",
                "33736.13885414603",
                "33821.14223334079",
                "33847.905588657566",
                "33873.43788252491",
                "33907.61753691434",
                "33908.0423180877",
                "33945.815411461466",
                "34053.91991013385",
                "34064.0330143862",
                "34121.218112670205",
                "34110.93071735103",
                "34090.344624575846",
                "34079.53075324881",
                "34095.42714548486",
                "34099.74730089552",
                "34201.26874451366",
                "34173.63611945978",
                "34105.59108132387",
                "34131.5092985174",
            ],
            symbol: "BTC",
            tier: 1,
            uuid: "Qwsogvtv82FCd",
        },
    ]);
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
    //         setStats(result.data);
    //         setStats(result.data);
    //         console.log(result.data);
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
                            element={
                                <Home
                                    displayStatus={stats}
                                    displayCoins={coins}
                                />
                            }
                        />
                        <Route path='/exchanges' element={<Exchanges />} />
                        <Route
                            path='/cryptocurrencies'
                            element={
                                <CryptoCurrencies
                                    displayCoins={coins}
                                    Home={false}
                                />
                            }
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
