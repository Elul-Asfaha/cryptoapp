import React from "react";
import { Link } from "react-router-dom";

type navItemTypes = {
    icon: React.ReactNode;
    title: string;
    path: string;
    active: string;
    collapsed: boolean;
    activeHandler: (string: string) => void;
};
const NavItems = ({
    icon,
    title,
    path,
    active,
    collapsed,
    activeHandler,
}: navItemTypes) => {
    return (
        <Link to={path}>
            <div
                className={`flex gap-2 items-center px-2 py-1 ${
                    active === title && "bg-blue-500"
                } ${collapsed ? "justify-center" : ""}`}
                onClick={() => activeHandler(title)}
            >
                <div className='text-2xl'>{icon}</div>
                <p className={`hidden md:block${collapsed ? "hidden" : ""}`}>
                    {title}
                </p>
            </div>
        </Link>
    );
};

export default NavItems;
