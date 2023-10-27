import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { AiOutlineHome } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
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
    const [collapsed, setCollapsed] = useState(false);
    const handleActive = (name: string) => {
        setActive(name);
        // this function handles which navitem is active
    };
    const handleCollapse = () => {
        setCollapsed(!collapsed);
        // this function handles sidebar collapse
    };

    return (
        <div className='flex flex-col w-fit h-full gap-3 p-3 bg-blue-950 text-slate-300'>
            <div className='flex gap-3 items-center'>
                <div className={`${collapsed ? "hidden" : ""}`}>Avatar</div>
                <div className='flex items-center gap-2'>
                    <Link to='/' className='flex gap-1'>
                        <div className=''>Logo</div>
                        <p className={`${collapsed ? "hidden" : ""}`}>
                            Cryptoverse
                        </p>
                    </Link>
                </div>
                <button onClick={handleCollapse} className='text-3xl'>
                    {collapsed ? <HiChevronRight /> : <HiChevronLeft />}
                </button>
            </div>
            <div className='flex flex-col gap-3'>
                {navItemData.map((items) => (
                    <NavItems
                        key={items.title}
                        title={items.title}
                        path={items.path}
                        icon={items.icon}
                        active={active}
                        collapsed={collapsed}
                        activeHandler={handleActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default NavBar;
