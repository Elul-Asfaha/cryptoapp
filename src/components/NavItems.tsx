import React from "react";
import { Link } from "react-router-dom";

type navItemTypes = {
    icon: React.ReactNode;
    title: string;
    path: string;
    active: string;
    activeHandler: (string: string) => void;
};
const NavItems = ({
    icon,
    title,
    path,
    active,
    activeHandler,
}: navItemTypes) => {
    return (
        <div
            className={`flex gap-2 items-center px-2 ${
                active === title && "bg-blue-500"
            }`}
            onClick={() => activeHandler(title)}
        >
            <div className='text-2xl'>{icon}</div>
            <Link to={path}>{title}</Link>
        </div>
    );
};

export default NavItems;
