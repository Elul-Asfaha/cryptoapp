import React from "react";
import { Link } from "react-router-dom";

type navItemTypes = {
    icon: React.ReactNode;
    title: string;
    path: string;
};
const NavItems = ({ icon, title, path }: navItemTypes) => {
    return (
        <div className='flex gap-2 items-center px-2'>
            <div className='text-2xl'>{icon}</div>
            <Link to={path}>{title}</Link>
        </div>
    );
};

export default NavItems;
