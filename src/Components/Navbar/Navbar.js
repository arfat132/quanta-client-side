import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="body-font text-white bg-sky-800 shadow-lg fixed z-10 w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                   
                    <span className="ml-3 text-2xl font-semibold text-white">QUANTA</span>
                </Link>
                <nav className="md:ml-auto font-medium flex flex-wrap items-center text-base justify-center uppercase">
                    <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to="" className="mr-5 hover:text-gray-900">About</Link>
                    <Link to="" className="mr-5 hover:text-gray-900">Blogs</Link>
                    <Link to="" className="mr-5 hover:text-gray-900">Manage Items</Link>
                    <Link to="" className="mr-5 hover:text-gray-900">My Items</Link>
                </nav>
                <button className="md:border-l md:border-gray-400 font-semibold uppercase inline-flex items-center bg-none border-0 py-1 px-3 text-teal-500 focus:outline-none rounded text-base mt-4 md:mt-0">Sign In
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;