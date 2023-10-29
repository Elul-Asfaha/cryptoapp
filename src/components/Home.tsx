import millify from "millify";
import { Link } from "react-router-dom";
import { CryptoCurrencies, News } from ".";
type HomeType = {
    displayStatus?: {
        total?: number;
        total24hVolume?: string;
        totalCoins?: number;
        totalExchanges?: number;
        totalMarketCap?: string;
        totalMarkets?: number;
    };
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
};
const Home = ({ displayStatus, displayCoins }: HomeType) => {
    return (
        <div className='bg-gray-50 p-5'>
            <p className='text-3xl py-10'>Global Crypto Stats</p>
            <div className='grid grid-cols-2 gap-y-3'>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>{displayStatus?.total}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total Exchanges</p>
                    <p>
                        {displayStatus?.totalExchanges &&
                            millify(displayStatus.totalExchanges)}
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total Market Cap</p>
                    <p>
                        {displayStatus?.totalMarketCap &&
                            millify(parseInt(displayStatus.totalMarketCap))}
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total 24h Volume</p>
                    <p>
                        {displayStatus?.total24hVolume &&
                            millify(parseInt(displayStatus.total24hVolume))}
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total Markets</p>
                    <p>
                        {displayStatus?.totalMarkets &&
                            millify(displayStatus.totalMarkets)}
                    </p>
                </div>
            </div>
            <div className='flex justify-between items-center py-10'>
                <p className='text-xl lg:text-3xl'>
                    Top 10 CryptoCurrencies in the world
                </p>
                <p className='w-full max-w-fit text-lg text-blue-500'>
                    <Link to='/cryptocurrencies'>Show more</Link>
                </p>
            </div>
            <CryptoCurrencies displayCoins={displayCoins} Home={true} />
            <div className='flex justify-between items-center py-10'>
                <p className='text-xl lg:text-3xl'>Latest Crypto News</p>
                <p className='w-full max-w-fit text-lg text-blue-500'>
                    <Link to='/news'>Show more</Link>
                </p>
            </div>
            <News />
        </div>
    );
};

export default Home;
