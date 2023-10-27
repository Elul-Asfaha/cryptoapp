import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { AiOutlineHome } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { useState } from "react";
const NavBar = () => {
    const navItemData = [
        {
            title: "Home",
            path: "/",
            icon: <AiOutlineHome />,
        },
        {
            title: "CryptoCurrencies",
            path: "/cryptoCurrencies",
            icon: <BsCurrencyExchange />,
        },
        {
            title: "Exchange",
            path: "/exchange",
            icon: <MdCurrencyExchange />,
        },
        {
            title: "News",
            path: "/news",
            icon: <IoNewspaperOutline />,
        },
    ];
    const [active, setActive] = useState("Home");
    const handleActive = (name: string) => {
        setActive(name);
    };

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
                        key={items.title}
                        title={items.title}
                        path={items.path}
                        icon={items.icon}
                        active={active}
                        activeHandler={handleActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default NavBar;
