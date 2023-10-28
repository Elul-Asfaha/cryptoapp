import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";
type CryptoCurrenciesType = {
    displayCoins: {
        Volume: string;
        btcPrice: string;
        change: string;
        coinrankingUrl: string;
        color: string;
        iconUrl: string;
        listedAt: number;
        lowVolume: boolean;
        marketCap: string;
        name: string;
        price: string;
        rank: number;
        sparkline: string[];
        symbol: string;
        tier: number;
        uuid: string;
    }[];
    Home: boolean;
};

const CryptoCurrencies = ({ displayCoins, Home }: CryptoCurrenciesType) => {
    return <div>CryptoCurrencies</div>;
};

export default CryptoCurrencies;
