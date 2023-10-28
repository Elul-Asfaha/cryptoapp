import millify from "millify";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
    const fetchdata = async () => {
        const url =
            "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "d1fd8aa275mshdfbdece75472e69p13a6b7jsnec1cb651fbf3",
                "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        // fetchdata();
    }, []);
    return (
        <div className='bg-gray-50 p-5'>
            <p className='text-3xl py-10'>Global Crypto Stats</p>
            <div className='grid grid-cols-2 gap-y-3'>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className=' text-gray-500'>Total CryptoCurrencies</p>
                    <p>5</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
