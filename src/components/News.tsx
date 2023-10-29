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
const News = ({ displayNews, Home }: newsType) => {
    console.log(displayNews);
    return (
        <div>
            {displayNews.map((items) => (
                <div>{items.name}</div>
            ))}
        </div>
    );
};

export default News;
