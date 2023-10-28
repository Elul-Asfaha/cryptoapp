import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='flex flex-col item-center justify-center text-lg gap-1 p-3 bg-blue-950 text-blue-500'>
            <p className='text-white text-center font-bold'>Cryptoverse</p>
            <p className='text-white text-center font-semibold text-sm'>
                All rights reserved
            </p>
            <div className='flex gap-5 justify-center'>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </div>
        </div>
    );
};

export default Footer;
