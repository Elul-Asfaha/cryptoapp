import moment from "moment";

type newsType = {
    displayNews: {
        datePublished: string;
        description: string;
        image: {
            thumbnail: {
                contentUrl: string;
            };
            isLicensed: boolean;
        };
        name: string;
        provider: {
            image: {
                thumbnail: {
                    contentUrl: string;
                }[];
            };
            name: string;
        }[];
        url: string;
    }[];
    Home: boolean;
};
const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const News = ({ displayNews, Home }: newsType) => {
    const displayWhenHomePage = displayNews?.slice(0, 6).map((items) => (
        <a
            key={items.name}
            href={items.url}
            target='_blank'
            rel='noreferrer'
            className='w-full bg-white p-5 border hover:shadow-md border-md flex flex-col gap-3'
        >
            <div className='w-full flex gap-2'>
                <p className='min-w-[65%] font-bold py-3'>{items.name}</p>
                <div className='flex h-[150px] w-full'>
                    <img
                        src={items?.image?.thumbnail?.contentUrl || demoImage}
                        alt='news'
                        className='object-cover'
                    />
                </div>
            </div>
            <p className='indent-3 text-gray-700'>
                {items.description.length > 100
                    ? `${items.description.substring(0, 100)}...`
                    : items.description}
            </p>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='flex h-[30px] w-[30px] rounded-full overflow-clip'>
                        <img
                            src={
                                items.provider[0]?.image?.thumbnail[0]
                                    ?.contentUrl || demoImage
                            }
                            alt='news'
                            className='object-cover'
                        />
                    </div>
                    <p>{items.provider[0]?.name}</p>
                </div>
                <p className='text-gray-600'>
                    {moment(items.datePublished).startOf("hour").fromNow()}
                </p>
            </div>
        </a>
    )); //renders when its the home page
    const displayWhenNewsPage = displayNews?.map((items) => (
        <a
            key={items.name}
            href={items.url}
            target='_blank'
            rel='noreferrer'
            className='w-full bg-white p-5 border hover:shadow-md border-md flex flex-col gap-3'
        >
            <div className='w-full flex gap-2'>
                <p className='min-w-[65%] font-bold py-3'>{items.name}</p>
                <div className='flex h-[150px] w-[100px]'>
                    <img
                        src={items?.image?.thumbnail?.contentUrl || demoImage}
                        alt='news'
                        className='object-cover'
                    />
                </div>
            </div>
            <p className='indent-3 text-gray-700'>
                {items.description.length > 100
                    ? `${items.description.substring(0, 100)}...`
                    : items.description}
            </p>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='flex h-[30px] w-[30px] rounded-full overflow-clip'>
                        <img
                            src={
                                items.provider[0]?.image?.thumbnail[0]
                                    ?.contentUrl || demoImage
                            }
                            alt='news'
                            className='object-cover'
                        />
                    </div>
                    <p>{items.provider[0]?.name}</p>
                </div>
                <p className='text-gray-600'>
                    {moment(items.datePublished).startOf("hour").fromNow()}
                </p>
            </div>
        </a>
    )); // renders when its news page

    return (
        <div
            className={`bg-gray-50 flex flex-col gap-5 ${
                Home ? "py-5" : "p-5 min-h-screen"
            }`}
        >
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {Home ? displayWhenHomePage : displayWhenNewsPage}
            </div>
        </div>
    );
};

export default News;
