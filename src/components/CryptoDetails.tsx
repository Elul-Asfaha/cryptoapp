import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CryptoDetails = () => {
    const { cryptoid } = useParams();

    const [timePeriod, setTimePeriod] = useState("7d");
    const [coin, setCoin] = useState({
        uuid: "Qwsogvtv82FCd",
        symbol: "BTC",
        name: "Bitcoin",
        description: "Bitcoin is the first decentralized digital currency.",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
        websiteUrl: "https://bitcoin.org",
        links: {
            name: "Bitcoin",
            url: "https://www.reddit.com/r/Bitcoin/",
            type: "reddit",
        },
        supply: {
            confirmed: true,
            circulating: "17009275",
            total: "21000000",
        },
        "24hVolume": "6818750000",
        marketCap: "159393904304",
        price: "9370.9993109108",
        btcPrice: "1",
        change: "-0.52",
        rank: 1,
        numberOfMarkets: 9800,
        numberOfExchanges: 190,
        sparkline: [
            "9515.0454185372",
            "9540.1812284677",
            "9554.2212643043",
            "9593.571539283",
            "9592.8596962985",
            "9562.5310295967",
            "9556.7860427046",
            "9388.823394515",
            "9335.3004209165",
            "9329.4331700521",
            "9370.9993109108",
        ],
        allTimeHigh: {
            price: "19500.471361532",
            timestamp: 1513555200,
        },
        coinrankingUrl:
            "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    });
    // const fetchSpecificCoinData = async () => {
    //     const url =
    //         "https://coinranking1.p.rapidapi.com/coin/" +
    //         cryptoid +
    //         "?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h";
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

    //         setCoin(result.data.coin);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // useEffect(() => {
    //     fetchSpecificCoinData();
    // }, []);

    return <div>CryptoDetails: {cryptoid}</div>;
};

export default CryptoDetails;
