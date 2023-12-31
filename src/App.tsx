import { Routes, Route } from "react-router-dom";
import {
    NavBar,
    Home,
    CryptoCurrencies,
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
            uuid: "Qwsogvtv82FCd",
            symbol: "BTC",
            name: "Bitcoin",
            color: "#f7931A",
            iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
            marketCap: "667285000641",
            price: "34173.09646972183",
            listedAt: 1330214400,
            tier: 1,
            change: "0.80",
            rank: 1,
            sparkline: [
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
                "34164.97906133618",
                "34182.1206262724",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
            "24hVolume": "12610983445",
            btcPrice: "1",
        },
        {
            uuid: "razxDUgYGNAdQ",
            symbol: "ETH",
            name: "Ethereum",
            color: "#3C3C3D",
            iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
            marketCap: "218376136429",
            price: "1789.1240585241333",
            listedAt: 1438905600,
            tier: 1,
            change: "0.91",
            rank: 2,
            sparkline: [
                "1766.2139265675094",
                "1763.2313165358073",
                "1770.206162402297",
                "1776.8988661705664",
                "1779.9516718816249",
                "1779.783057356091",
                "1780.6220628213077",
                "1781.3601887042748",
                "1781.9681861852994",
                "1784.024836036708",
                "1788.441287508777",
                "1789.3967329366346",
                "1790.6945058759306",
                "1788.9906009721665",
                "1788.8561099322474",
                "1789.3790315188278",
                "1789.6104692231636",
                "1790.0625737431594",
                "1791.947522921729",
                "1787.2429786307086",
                "1786.1945088319317",
                "1788.4493021088426",
                "1790.0834890546134",
                "1788.6717445820973",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
            "24hVolume": "7853857585",
            btcPrice: "0.05235475398342492",
        },
        {
            uuid: "HIVsRcGKkPFtW",
            symbol: "USDT",
            name: "Tether USD",
            color: "#22a079",
            iconUrl: "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
            marketCap: "84636020769",
            price: "1.0011581445176514",
            listedAt: 1420761600,
            tier: 1,
            change: "-0.00",
            rank: 3,
            sparkline: [
                "1.0017252535911159",
                "1.0013320565733395",
                "0.9999191620518139",
                "0.999370437675634",
                "0.9998270519715855",
                "1.000489942441116",
                "1.0004073704540999",
                "1.0002888407769577",
                "1.000673130813222",
                "1.000255309074195",
                "0.9998863239031189",
                "1.0002699819075311",
                "1.000036487278579",
                "1.000584279730526",
                "1.0005839799045093",
                "1.0003135135034613",
                "1.0002702610868193",
                "1.0002361663850223",
                "0.9994803591247051",
                "1.001374755781076",
                "1.001332925108377",
                "1.0007993171833431",
                "1.0006360637395249",
                "1.0011307587811868",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
            "24hVolume": "123606757115",
            btcPrice: "0.000029296676272948",
        },
        {
            uuid: "WcwrkfNI4FUAe",
            symbol: "BNB",
            name: "BNB",
            color: "#e8b342",
            iconUrl: "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
            marketCap: "34183624731",
            price: "226.68892953231827",
            listedAt: 1503014400,
            tier: 1,
            change: "0.67",
            rank: 4,
            sparkline: [
                "224.38328413992508",
                "223.241514320147",
                "223.7388448817507",
                "224.0511184485076",
                "224.43478784820743",
                "224.27660659619863",
                "224.33741447571927",
                "225.04706388793394",
                "226.0976575091431",
                "226.45313684915342",
                "226.73330812651355",
                "227.03557647078034",
                "227.2923669504154",
                "226.73432297887416",
                "226.85971837338",
                "227.05235331247988",
                "226.82516499016816",
                "227.42645529942757",
                "227.19660900958922",
                "226.3833674426029",
                "226.47617389857763",
                "226.76165984207663",
                "226.53562440418668",
                "226.60921238229596",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/WcwrkfNI4FUAe+bnb-bnb",
            "24hVolume": "394747103",
            btcPrice: "0.006633549574097566",
        },
        {
            uuid: "-l8Mn2pVlRs-p",
            symbol: "XRP",
            name: "XRP",
            color: "#000000",
            iconUrl: "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
            marketCap: "29359900138",
            price: "0.5481632088044001",
            listedAt: 1421798400,
            tier: 1,
            change: "-0.48",
            rank: 5,
            sparkline: [
                "0.5449154768869119",
                "0.5423027286081645",
                "0.5442111153350855",
                "0.5453426502691734",
                "0.545857801505937",
                "0.5465707189959504",
                "0.5458555734973842",
                "0.542820069183412",
                "0.5424459923032982",
                "0.5443020861113412",
                "0.5449384667491194",
                "0.5448901610962215",
                "0.545757559465816",
                "0.5456354882322496",
                "0.5455340570945567",
                "0.5461202559865076",
                "0.546743378165588",
                "0.546819889955718",
                "0.5477688500930992",
                "0.5472779681490465",
                "0.5467012179973746",
                "0.5464790037409439",
                "0.5470158496485886",
                "0.5479787005812037",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/-l8Mn2pVlRs-p+xrp-xrp",
            "24hVolume": "797421232",
            btcPrice: "0.000016040782528738",
        },
        {
            uuid: "aKzUVe4Hh_CON",
            symbol: "USDC",
            name: "USDC",
            color: "#7894b4",
            iconUrl: "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
            marketCap: "25014344503",
            price: "1.0009539544949495",
            listedAt: 1539043200,
            tier: 1,
            change: "-0.02",
            rank: 6,
            sparkline: [
                "1.0017891008340798",
                "1.001074238039493",
                "0.9997219917734691",
                "0.9992578473540155",
                "0.9996515760101372",
                "1.0002452765034968",
                "1.0001221610321414",
                "1.0001277934388881",
                "1.0004655290122806",
                "1.000096333266615",
                "0.999737595373666",
                "1.0001092306368191",
                "0.9999038633187775",
                "1.000468791740343",
                "1.0004542395838918",
                "1.000290840720634",
                "1.0002163379359168",
                "1.0001663970964523",
                "0.9994601487099462",
                "1.0011141881896157",
                "1.0012402333180077",
                "1.0007019077498736",
                "1.0004449213911677",
                "1.0009290855010722",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc",
            "24hVolume": "4528315145",
            btcPrice: "0.000029290701104063",
        },
        {
            uuid: "zNZHO_Sjf",
            symbol: "SOL",
            name: "Solana",
            color: "#000",
            iconUrl: "https://cdn.coinranking.com/yvUG4Qex5/solana.svg",
            marketCap: "13352151582",
            price: "31.853610728612313",
            listedAt: 1586539320,
            tier: 1,
            change: "-0.20",
            rank: 7,
            sparkline: [
                "31.91740329996138",
                "31.745244724518365",
                "31.777609089918318",
                "32.108030692927734",
                "32.04943709403535",
                "31.821310003128275",
                "31.71474526461978",
                "31.869393733946467",
                "31.836840608404135",
                "32.07339774240013",
                "32.25440185797532",
                "32.27152096048157",
                "32.35336617567675",
                "32.273485927375205",
                "32.20204715810565",
                "32.27074661708417",
                "32.17775032978479",
                "32.2224905092205",
                "32.311968702996566",
                "32.02013277139576",
                "31.91470921132515",
                "31.903562829746075",
                "31.92780648730743",
                "31.920691392320965",
            ],
            lowVolume: false,
            coinrankingUrl: "https://coinranking.com/coin/zNZHO_Sjf+solana-sol",
            "24hVolume": "580488389",
            btcPrice: "0.000932125385735395",
        },
        {
            uuid: "qzawljRxB5bYu",
            symbol: "ADA",
            name: "Cardano",
            color: "#3cc8c8",
            iconUrl: "https://cdn.coinranking.com/ryY28nXhW/ada.svg",
            marketCap: "10622644506",
            price: "0.2925942367105321",
            listedAt: 1506902400,
            tier: 1,
            change: "1.61",
            rank: 8,
            sparkline: [
                "0.28714492280071263",
                "0.2862945616877999",
                "0.2887801402266447",
                "0.28937721822272117",
                "0.28887768697872745",
                "0.2890936629353898",
                "0.2889259285013373",
                "0.2895806512795602",
                "0.28971507289877485",
                "0.29227522504961045",
                "0.2955030522678808",
                "0.29611240195359007",
                "0.2963573063840599",
                "0.2948796938429777",
                "0.29415714855108094",
                "0.2943829673011333",
                "0.29431192926437627",
                "0.29355128100809036",
                "0.293828507771382",
                "0.2923721035336944",
                "0.2915895530387906",
                "0.29215234364290693",
                "0.29281314105187556",
                "0.2926419244608353",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/qzawljRxB5bYu+cardano-ada",
            "24hVolume": "175490755",
            btcPrice: "0.000008562122457056",
        },
        {
            uuid: "a91GCGd_u96cF",
            symbol: "DOGE",
            name: "Dogecoin",
            color: "#c2a633",
            iconUrl: "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
            marketCap: "9736059077",
            price: "0.06899677225461436",
            listedAt: 1391212800,
            tier: 1,
            change: "-0.06",
            rank: 9,
            sparkline: [
                "0.06866850794970299",
                "0.06836576908447808",
                "0.06844560407031372",
                "0.0680556346459897",
                "0.06768986429656529",
                "0.0677560371850814",
                "0.06776837097359044",
                "0.06783965500678184",
                "0.06784145576460192",
                "0.06802912659771491",
                "0.06831116876578326",
                "0.06854881868061657",
                "0.06879760128543819",
                "0.0687200582404047",
                "0.06869237421631735",
                "0.06879714213637936",
                "0.06915489253462907",
                "0.06911537776710741",
                "0.06936474162128727",
                "0.0690668028553777",
                "0.06898735292376233",
                "0.06893987972701056",
                "0.06901984662593624",
                "0.0689004591375408",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/a91GCGd_u96cF+dogecoin-doge",
            "24hVolume": "347916026",
            btcPrice: "0.000002019037763105",
        },
        {
            uuid: "qUhEFk1I61atv",
            symbol: "TRX",
            name: "TRON",
            color: "#eb0029",
            iconUrl: "https://cdn.coinranking.com/behejNqQs/trx.svg",
            marketCap: "8458479737",
            price: "0.09455881717665024",
            listedAt: 1505260800,
            tier: 1,
            change: "0.93",
            rank: 10,
            sparkline: [
                "0.09366130514714838",
                "0.09357563808795498",
                "0.09345208947718069",
                "0.09346453616014405",
                "0.09347756729029806",
                "0.09356898796180256",
                "0.09358902337791056",
                "0.09351035325913122",
                "0.09343095507655723",
                "0.09375597065965728",
                "0.09388775624575775",
                "0.0940112929130409",
                "0.09422237088328912",
                "0.09383595726703918",
                "0.0937616591472803",
                "0.09396002796801753",
                "0.0939718301409704",
                "0.09403065846187075",
                "0.0941725625620748",
                "0.09439177542384015",
                "0.09439273001021906",
                "0.09448202372762249",
                "0.09457335746110315",
                "0.09456095781426622",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/qUhEFk1I61atv+tron-trx",
            "24hVolume": "251143197",
            btcPrice: "0.000002767054406686",
        },
        {
            uuid: "CiixT63n3",
            symbol: "wstETH",
            name: "Wrapped liquid staked Ether 2.0",
            color: "#70b9dc",
            iconUrl: "https://cdn.coinranking.com/LQg69oxqx/wstETH.PNG",
            marketCap: "6568829993",
            price: "2046.7709713318613",
            listedAt: 1638756833,
            tier: 1,
            change: "0.87",
            rank: 11,
            sparkline: [
                "2023.1564887243103",
                "2017.1214967524222",
                "2024.537658674128",
                "2031.8783084449356",
                "2035.953555930329",
                "2034.5043909501082",
                "2033.8254099993317",
                "2037.6625242009213",
                "2038.2788277172278",
                "2040.2545526745794",
                "2046.0302969797922",
                "2047.1087650088302",
                "2049.1342463775472",
                "2047.0736193579867",
                "2046.5732538793586",
                "2047.2435761408221",
                "2047.4515654107054",
                "2048.0149260153307",
                "2050.3539889276585",
                "2045.5897132869002",
                "2043.4895167243776",
                "2046.3850044754909",
                "2048.1607196932937",
                "2047.0665306117119",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/CiixT63n3+wrappedliquidstakedether20-wsteth",
            "24hVolume": "42391641",
            btcPrice: "0.059899810814879384",
        },
        {
            uuid: "VLqpJwogdhHNb",
            symbol: "LINK",
            name: "Chainlink",
            color: "#2c5cdc",
            iconUrl: "https://cdn.coinranking.com/9NOP9tOem/chainlink.svg",
            marketCap: "6158690678",
            price: "11.059874300859603",
            listedAt: 1505952000,
            tier: 1,
            change: "1.06",
            rank: 12,
            sparkline: [
                "11.155309665816299",
                "11.09609591570041",
                "11.020078400149703",
                "11.190173099915215",
                "11.235083855743062",
                "11.201495342121984",
                "11.157272427104317",
                "11.167278309427548",
                "11.124597023806917",
                "11.168319423661167",
                "11.323978556390976",
                "11.3916322330823",
                "11.521147683097697",
                "11.47510858958282",
                "11.341311826621798",
                "11.377826803119696",
                "11.53507508699681",
                "11.518409180073686",
                "11.47159190398576",
                "11.277679488211616",
                "11.217834025317531",
                "11.181451652899245",
                "11.155428019134838",
                "11.049897564661324",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/VLqpJwogdhHNb+chainlink-link",
            "24hVolume": "715017412",
            btcPrice: "0.000323642731956085",
        },
        {
            uuid: "Mtfb0obXVh59u",
            symbol: "WETH",
            name: "Wrapped Ether",
            color: "#303030",
            iconUrl: "https://cdn.coinranking.com/KIviQyZlt/weth.svg",
            marketCap: "6103620759",
            price: "1782.6139988811108",
            listedAt: 1600259445,
            tier: 1,
            change: "0.23",
            rank: 13,
            sparkline: [
                "1770.0175773642245",
                "1765.6120082636712",
                "1771.8491462647482",
                "1772.5982800258193",
                "1783.3820269818045",
                "1780.8917976437915",
                "1798.6615464927163",
                "1777.6337555537036",
                "1784.678970402881",
                "1779.1571592069863",
                "1794.3239020588853",
                "1790.4820727201388",
                "1796.838624183464",
                "1790.5947576742735",
                "1791.5984380237685",
                "1790.086958474367",
                "1790.725166410093",
                "1790.5080414352449",
                "1793.4703827385206",
                "1792.4496738361431",
                "1785.9769295031942",
                "1790.1309263848989",
                "1792.3929745223447",
                "1795.6514084583082",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/Mtfb0obXVh59u+wrappedether-weth",
            "24hVolume": "235497460",
            btcPrice: "0.05216425150294908",
        },
        {
            uuid: "uW2tk-ILY0ii",
            symbol: "MATIC",
            name: "Polygon",
            color: "#8247e5",
            iconUrl:
                "https://cdn.coinranking.com/M-pwilaq-/polygon-matic-logo.svg",
            marketCap: "5811062105",
            price: "0.6241874383271745",
            listedAt: 1558961160,
            tier: 1,
            change: "1.65",
            rank: 14,
            sparkline: [
                "0.6111362425385142",
                "0.6064408804786139",
                "0.6072185226652824",
                "0.6095459308656639",
                "0.6109398667064807",
                "0.6095027547850245",
                "0.6091789721849387",
                "0.6116254423610976",
                "0.6134467915014906",
                "0.6151262045769016",
                "0.620761550485564",
                "0.6244583415046476",
                "0.6241089030421177",
                "0.6213251348989867",
                "0.6217208757537138",
                "0.6227350786059154",
                "0.6229535884107636",
                "0.6225038756317126",
                "0.6228940864033913",
                "0.6200871215416109",
                "0.6185964573108158",
                "0.6202222111254201",
                "0.6212658833577074",
                "0.6224421486578975",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/uW2tk-ILY0ii+polygon-matic",
            "24hVolume": "172861342",
            btcPrice: "0.000018265463268165",
        },
        {
            uuid: "x4WXHge-vvFY",
            symbol: "WBTC",
            name: "Wrapped BTC",
            color: "#000000",
            iconUrl: "https://cdn.coinranking.com/o3-8cvCHu/wbtc[1].svg",
            marketCap: "5799947489",
            price: "34123.63908934631",
            listedAt: 1549894980,
            tier: 1,
            change: "0.74",
            rank: 15,
            sparkline: [
                "33747.31887402614",
                "33638.83533542207",
                "33674.56641488035",
                "33755.98445689997",
                "33858.93756936589",
                "33870.37541373689",
                "33870.91082668771",
                "33892.528268701855",
                "33886.481532870326",
                "33917.73808892663",
                "34025.659211259364",
                "34056.23947218765",
                "34105.88933799088",
                "34089.46141099601",
                "34065.80743542569",
                "34073.70536535625",
                "34090.863745188195",
                "34087.649751195",
                "34143.58257426799",
                "34116.37240245705",
                "34044.806503846106",
                "34059.41166201657",
                "34104.422068100735",
                "34144.94818447108",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/x4WXHge-vvFY+wrappedbtc-wbtc",
            "24hVolume": "21826406",
            btcPrice: "0.9985527392749047",
        },
        {
            uuid: "25W7FG7om",
            symbol: "DOT",
            name: "Polkadot",
            color: "#E6007A",
            iconUrl: "https://cdn.coinranking.com/V3NSSybv-/polkadot-dot.svg",
            marketCap: "5494203534",
            price: "4.180272858459879",
            listedAt: 1598365200,
            tier: 1,
            change: "0.99",
            rank: 16,
            sparkline: [
                "4.127932422027501",
                "4.095841157043799",
                "4.112620550008063",
                "4.124787029452152",
                "4.134512193027459",
                "4.139928726764766",
                "4.13707661982283",
                "4.145727465683647",
                "4.149883070807689",
                "4.167701731645574",
                "4.188413332648519",
                "4.193946536011188",
                "4.189431116386064",
                "4.180310052545432",
                "4.178322907002866",
                "4.184695481741521",
                "4.192362382237583",
                "4.187441278547706",
                "4.203847846846905",
                "4.197735455730147",
                "4.1822296448502705",
                "4.176627065126565",
                "4.184069912896472",
                "4.1804014644766765",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/25W7FG7om+polkadot-dot",
            "24hVolume": "136164931",
            btcPrice: "0.000122326428983797",
        },
        {
            uuid: "D7B1x_ks7WhV5",
            symbol: "LTC",
            name: "Litecoin",
            color: "#345d9d",
            iconUrl: "https://cdn.coinranking.com/BUvPxmc9o/ltcnew.svg",
            marketCap: "5035766732",
            price: "68.34599997527853",
            listedAt: 1382572800,
            tier: 1,
            change: "1.80",
            rank: 17,
            sparkline: [
                "66.65397458482312",
                "66.34931788667821",
                "66.37975221234419",
                "66.53243210845392",
                "66.59359132804364",
                "66.69539459105707",
                "66.89379655521002",
                "67.34494780663285",
                "67.53638682053037",
                "67.55952816853309",
                "67.80734092592559",
                "67.98440516340979",
                "68.08519036913663",
                "67.97961253122855",
                "68.03764059616657",
                "68.05490249789709",
                "68.01458641883202",
                "67.86533387234621",
                "68.02665012801654",
                "68.00024864866022",
                "67.95614480239023",
                "68.08329168159435",
                "68.1161828501239",
                "68.24775948169096",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/D7B1x_ks7WhV5+litecoin-ltc",
            "24hVolume": "430728207",
            btcPrice: "0.001999994353330981",
        },
        {
            uuid: "ZlZpzOJo43mIo",
            symbol: "BCH",
            name: "Bitcoin Cash",
            color: "#8dc451",
            iconUrl: "https://cdn.coinranking.com/By8ziihX7/bch.svg",
            marketCap: "4737828769",
            price: "247.64673753467352",
            listedAt: 1541808000,
            tier: 1,
            change: "3.40",
            rank: 18,
            sparkline: [
                "237.86150904791103",
                "236.37208582566674",
                "237.66860280920613",
                "238.27455736918802",
                "238.41964414165233",
                "238.7557734446409",
                "239.16252109255097",
                "241.4254269720649",
                "241.3098432849069",
                "241.98561821236828",
                "242.57893556866327",
                "242.5579047105635",
                "243.95103371041628",
                "244.09501525529726",
                "243.54909829069595",
                "243.76218218519895",
                "244.32849477632058",
                "245.10892993589246",
                "245.84583461754292",
                "245.96061262301185",
                "245.53922732275151",
                "245.52733572170578",
                "245.28491633796642",
                "246.34895968852572",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/ZlZpzOJo43mIo+bitcoincash-bch",
            "24hVolume": "181437587",
            btcPrice: "0.007246833419210178",
        },
        {
            uuid: "xz24e0BjL",
            symbol: "SHIB",
            name: "Shiba Inu",
            color: "#fda32b",
            iconUrl: "https://cdn.coinranking.com/fiZ4HfnRR/shib.png",
            marketCap: "4584881538",
            price: "0.000007776715561128",
            listedAt: 1620650373,
            tier: 1,
            change: "0.17",
            rank: 19,
            sparkline: [
                "0.000007717837361083",
                "0.000007681041758177",
                "0.000007736534565782",
                "0.00000773070496538",
                "0.000007728946073399",
                "0.000007719660887677",
                "0.000007697573172079",
                "0.000007697902857209",
                "0.000007690871316986",
                "0.000007704961251345",
                "0.000007733605665321",
                "0.000007743812644883",
                "0.000007769626546391",
                "0.000007770649711052",
                "0.000007782823832218",
                "0.000007813897069946",
                "0.000007813721717967",
                "0.000007811066614203",
                "0.000007827602741303",
                "0.000007801752499746",
                "0.000007778752033665",
                "0.000007780511058149",
                "0.000007788670831205",
                "0.000007775240818642",
            ],
            lowVolume: false,
            coinrankingUrl:
                "https://coinranking.com/coin/xz24e0BjL+shibainu-shib",
            "24hVolume": "110601489",
            btcPrice: "2.27568361e-10",
        },
        {
            uuid: "MoTuySvg7",
            symbol: "DAI",
            name: "Dai",
            color: "#ea9999",
            iconUrl:
                "https://cdn.coinranking.com/mAZ_7LwOE/mutli-collateral-dai.svg",
            marketCap: "3869330086",
            price: "1.0007307287901615",
            listedAt: 1585574040,
            tier: 1,
            change: "-0.03",
            rank: 20,
            sparkline: [
                "1.0013701542307014",
                "1.0011916990236298",
                "0.999833925171385",
                "0.9992949264101438",
                "0.9995634735863931",
                "1.0002519514882227",
                "1.0002781747491258",
                "1.0001116488804933",
                "1.0003121872355016",
                "1.0001475314553672",
                "0.9995600907735461",
                "1.0000053702928153",
                "0.9997303250452466",
                "1.0002889980958354",
                "1.0002738312224364",
                "1.0000082252470899",
                "1.0000091190772464",
                "1.0000135084451711",
                "0.9991102307516335",
                "1.0010080172916194",
                "1.0012093145478094",
                "1.0005434828385564",
                "1.0004378006657568",
                "1.0008415459990547",
            ],
            lowVolume: false,
            coinrankingUrl: "https://coinranking.com/coin/MoTuySvg7+dai-dai",
            "24hVolume": "37732785",
            btcPrice: "0.000029284168898093",
        },
    ]);
    const [news, setNews] = useState([
        {
            datePublished: "",
            description: "",
            image: {
                thumbnail: {
                    contentUrl: "",
                },
                isLicensed: true,
            },
            name: "",
            provider: [
                {
                    image: {
                        thumbnail: [
                            {
                                contentUrl: "",
                            },
                        ],
                    },
                    name: "",
                },
            ],
            url: "",
        },
    ]);

    const fetchCoinData = async () => {
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
            const result = await response.json();
            setStats(result.data.stats);
            setCoins(result.data.coins);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchNewsData = async () => {
        const url =
            "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=100";
        const options = {
            method: "GET",
            headers: {
                "X-BingApis-SDK": "true",
                "X-RapidAPI-Key":
                    "d1fd8aa275mshdfbdece75472e69p13a6b7jsnec1cb651fbf3",
                "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setNews(result.value);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCoinData();
        fetchNewsData();
    }, []);
    return (
        <div className='h-screen max-h-screen w-full overflow-y-hidden'>
            <div className='flex flex-col md:flex-row h-full'>
                <NavBar />
                <div className='w-full overflow-y-scroll'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <Home
                                    displayStatus={stats}
                                    displayCoins={coins}
                                    displayNews={news}
                                />
                            }
                        />
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
                        <Route
                            path='/news'
                            element={<News displayNews={news} Home={false} />}
                        />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
