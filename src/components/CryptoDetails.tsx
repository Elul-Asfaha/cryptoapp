import HTMLReactParser from "html-react-parser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { MdOutlineNumbers } from "react-icons/md";
import {
    AiOutlineDollarCircle,
    AiOutlineThunderbolt,
    AiOutlineTrophy,
    AiOutlineFund,
    AiOutlineStop,
    AiOutlineCheck,
} from "react-icons/ai";
import { HiOutlineCurrencyYen } from "react-icons/hi";
import { PiWarningCircleLight } from "react-icons/pi";
type coinDetailsType = {
    volume: string;
    uuid: string;
    slug: string;
    symbol: string;
    name: string;
    description: string;
    color: string;
    iconUrl: string;
    websiteUrl: string;
    links: [
        {
            name: string;
            url: string;
            type: string;
        }
    ];
    supply: {
        confirmed: true;
        circulating: string;
        total: string;
    };
    "24hVolume": string;
    marketCap: string;
    price: string;
    btcPrice: string;
    change: string;
    rank: number;
    numberOfMarkets: number;
    numberOfExchanges: number;
    sparkline: [];
    allTimeHigh: {
        price: string;
        timestamp: number;
    };
    coinrankingUrl: string;
};
const CryptoDetails = () => {
    const { cryptoid } = useParams();

    const [timePeriod, setTimePeriod] = useState("7d");
    const [coin, setCoin] = useState<coinDetailsType>();

    const fetchSpecificCoinData = async () => {
        const url =
            "https://coinranking1.p.rapidapi.com/coin/" +
            cryptoid +
            "?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=" +
            timePeriod;
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
            const result = await response.json();
            setCoin(result.data.coin);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchSpecificCoinData();
    }, [timePeriod]);

    const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

    const stats = [
        {
            title: "Price to USD",
            value: `$ ${coin?.price && millify(parseInt(coin?.price))}`,
            icon: <AiOutlineDollarCircle />,
        },
        {
            title: "Rank",
            value: coin?.rank,
            icon: <MdOutlineNumbers />,
        },
        {
            title: "24h Volume",
            value: `$ ${coin?.volume && millify(parseInt(coin?.volume))}`,
            icon: <AiOutlineThunderbolt />,
        },
        {
            title: "Market Cap",
            value: `$ ${coin?.marketCap && millify(parseInt(coin?.marketCap))}`,
            icon: <AiOutlineDollarCircle />,
        },
        {
            title: "All-time-high (daily avg.)",
            value: `$ ${
                coin?.allTimeHigh?.price &&
                millify(parseInt(coin?.allTimeHigh?.price))
            }`,
            icon: <AiOutlineTrophy />,
        },
    ];

    const genericStats = [
        {
            title: "Number Of Markets",
            value: coin?.numberOfMarkets,
            icon: <AiOutlineFund />,
        },
        {
            title: "Number Of Exchanges",
            value: coin?.numberOfExchanges,
            icon: <HiOutlineCurrencyYen />,
        },
        {
            title: "Aprroved Supply",
            value: coin?.supply?.confirmed ? (
                <AiOutlineCheck />
            ) : (
                <AiOutlineStop />
            ),
            icon: <PiWarningCircleLight />,
        },
        {
            title: "Total Supply",
            value: `$ ${
                coin?.supply?.total && millify(parseInt(coin?.supply?.total))
            }`,
            icon: <PiWarningCircleLight />,
        },
        {
            title: "Circulating Supply",
            value: `$ ${
                coin?.supply?.circulating &&
                millify(parseInt(coin?.supply?.circulating))
            }`,
            icon: <PiWarningCircleLight />,
        },
    ];

    return (
        <div className='bg-gray-50 p-5 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <p className='text-blue-500 text-3xl font-bold text-center'>
                    {coin?.name}
                    {coin?.slug ? " (" + coin?.slug + ")" : ""} Price
                </p>
                <p className='text-center text-gray-500'>
                    {coin?.name} live price in US dollars. View Value
                    statistics, market cap and supply
                </p>
            </div>
            <select
                defaultValue={"7d"}
                placeholder='Select Time Period'
                onChange={(e) => setTimePeriod(e.target.value)}
                className='bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-[150px] px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
                {time.map((date) => (
                    <option key={date} value={date}>
                        {date}
                    </option>
                ))}
            </select>
            <div className='grid gap-y-10 gap-x-10 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-10 lg:gap-5 justify-center w-fit mx-auto'>
                <div className='flex flex-col gap-5 items-center'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-center font-semibold text-2xl'>
                            {coin?.name} Value Statistics
                        </p>
                        <p className='text-center '>
                            An overview showing the stats of
                            {" " + coin?.name}
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {stats.map(({ icon, title, value }) => (
                            <div
                                key={title}
                                className='flex p-4 text-lg items-center justify-between rounded-sm shadow-sm hover:bg-white w-[350px]'
                            >
                                <div className='flex gap-3 items-center'>
                                    <div className='text-2xl'>{icon}</div>
                                    <p>{title}</p>
                                </div>
                                <p className='w-full max-w-fit font-bold'>
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-center font-semibold text-2xl'>
                            Other Value Statistics
                        </p>
                        <p className='text-center '>
                            An overview showing the stats of all crypto
                            currencies{" "}
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {genericStats.map(({ icon, title, value }) => (
                            <div
                                key={title}
                                className='flex p-4 text-lg items-center justify-between rounded-sm shadow-sm hover:bg-white w-[350px]'
                            >
                                <div className='flex gap-3 items-center'>
                                    <div className='text-2xl'>{icon}</div>
                                    <p>{title}</p>
                                </div>
                                <p className='w-full max-w-fit font-bold'>
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-y-10'>
                <div className='flex flex-col gap-5'>
                    <p className='text-2xl text-blue-500'>
                        What is {coin?.name}?
                    </p>
                    {coin && HTMLReactParser(coin?.description)}
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-4xl'>{coin?.name} Links</p>
                    {coin?.links.map((link) => (
                        <a
                            key={link.url}
                            className='flex p-4 text-lg items-center justify-between rounded-sm shadow-sm hover:bg-white w-[350px]'
                            href={link.url}
                        >
                            <p>{link.type}</p>
                            <p>{link.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CryptoDetails;
