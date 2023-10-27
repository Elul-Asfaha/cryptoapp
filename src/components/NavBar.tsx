import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { AiOutlineHome } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
const NavBar = () => {
    const navItemData = [
        {
            title: "Home",
            path: "/",
            icon: <AiOutlineHome />,
        },
        {
            title: "CryptoCurrencies",
            path: "",
            icon: <BsCurrencyExchange />,
        },
        {
            title: "Exchange",
            path: "",
            icon: <MdCurrencyExchange />,
        },
        {
            title: "News",
            path: "",
            icon: <IoNewspaperOutline />,
        },
    ];

    return (
        <div>
            <div>
                <div>Avatar</div>
                <div>
                    logo
                    <Link to='/'>Cryptoverse</Link>
                </div>
            </div>
            <div>
                {navItemData.map((items) => (
                    <NavItems
                        title={items.title}
                        path={items.path}
                        icon={items.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default NavBar;
