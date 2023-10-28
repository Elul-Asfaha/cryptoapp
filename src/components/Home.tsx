import millify from "millify";
import { Link } from "react-router-dom";
type HomeType = {
    displayStatus?: {
        total?: number;
        total24hVolume?: string;
        totalCoins?: number;
        totalExchanges?: number;
        totalMarketCap?: string;
        totalMarkets?: number;
    };
};
const Home = (displayStatus: HomeType) => {
    return (
        <div className='bg-gray-50 p-5'>
            <p className='text-3xl py-10'>Global Crypto Stats</p>
            <div className='grid grid-cols-2 gap-y-3'>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>{displayStatus.displayStatus?.total}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total Exchanges</p>
                    <p>{displayStatus.displayStatus?.totalExchanges}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total Market Cap</p>
                    <p>{displayStatus.displayStatus?.totalMarketCap}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total 24h Volume</p>
                    <p>{displayStatus.displayStatus?.total24hVolume}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total Markets</p>
                    <p>{displayStatus.displayStatus?.totalMarkets}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
