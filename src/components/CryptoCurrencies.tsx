import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
type CryptoCurrenciesType = {
    displayCoins: {
        uuid?: string;
        symbol?: string;
        name?: string;
        color?: string;
        iconUrl?: string;
        marketCap?: string;
        price?: string;
        listedAt?: number;
        tier?: number;
        change?: string;
        rank?: number;
        sparkline?: string[];
        lowVolume?: boolean;
        coinrankingUrl?: string;
        "24hVolume"?: string;
        btcPrice?: string;
        Volume?: string;
    }[];

    Home: boolean;
};
const CryptoCurrencies = ({ displayCoins, Home }: CryptoCurrenciesType) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [coinsToBeDisplayed, setCoinsToBeDisplayed] = useState(displayCoins);

    useEffect(() => {
        const filteredData = displayCoins?.filter((coin) =>
            coin.name?.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        );
        setCoinsToBeDisplayed(filteredData);
        // this filters the cryptos based on the search term
    }, [searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

    const displayWhenHomePage = coinsToBeDisplayed
        ?.slice(0, 10)
        .map((items) => (
            <Link
                to={`/crypto/${items.uuid}`}
                key={items.uuid}
                className='w-full bg-white p-5 border hover:shadow-md border-md'
            >
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-1 font-bold'>
                            <div>{items.rank}.</div>
                            <div>{items.name}</div>
                        </div>
                        <div className='flex h-[30px] w-[30px]'>
                            <img className='object-cover' src={items.iconUrl} />
                        </div>
                    </div>
                    <div className='py-5 flex flex-col gap-2'>
                        <div className='flex gap-1'>
                            <p>Price:</p>
                            {items.price}
                        </div>
                        <div className='flex gap-1'>
                            <p>Market Cap:</p>
                            {items.marketCap}
                        </div>
                        <div className='flex gap-1'>
                            <p>Daily Change:</p>
                            {items.change}
                        </div>
                    </div>
                </div>
            </Link>
        )); //renders when its the home page

    const displayWhenCryptoCurrenciesPage = coinsToBeDisplayed?.map((items) => (
        <Link
            to={`/crypto/${items.uuid}`}
            key={items.uuid}
            className='w-full bg-white p-5 border hover:shadow-md border-md'
        >
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-1 font-bold'>
                        <div>{items.rank}.</div>
                        <div>{items.name}</div>
                    </div>
                    <div className='flex h-[30px] w-[30px]'>
                        <img className='object-cover' src={items.iconUrl} />
                    </div>
                </div>
                <div className='py-5 flex flex-col gap-2'>
                    <div className='flex gap-1'>
                        <p>Price:</p>
                        {items.price}
                    </div>
                    <div className='flex gap-1'>
                        <p>Market Cap:</p>
                        {items.marketCap}
                    </div>
                    <div className='flex gap-1'>
                        <p>Daily Change:</p>
                        {items.change}
                    </div>
                </div>
            </div>
        </Link>
    )); // renders when its cryptocurrencies page

    return (
        <div
            className={`min-h-screen bg-gray-50 flex flex-col gap-5 ${
                Home ? "py-5" : "p-5"
            }`}
        >
            {!Home && (
                <div className='flex justify-center'>
                    <input
                        type='text'
                        className='py-[6px] px-4 text-[#3B82F6] placeholder-black outline-[#3B82F6]'
                        placeholder='Search CryptoCurrency'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {Home ? displayWhenHomePage : displayWhenCryptoCurrenciesPage}
            </div>
        </div>
    );
};

export default CryptoCurrencies;
