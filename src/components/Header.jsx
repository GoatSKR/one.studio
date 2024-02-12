import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
            <nav className="flex justify-center md:justify-between md:items-center py-4 px-8 md:px-16">
                <div className='hidden md:block'>
                    <div className="grid grid-cols-2 gap-1">
                        <img className='h-12 w-12' src="/static/images/onelogo.jpg" alt="logo" />
                        <a href="mailto:hi@sridhar.fyi" className="text-white hover:text-[#121211] hover:bg-[#e3f551] rounded-3xl bg-[#252525] bg-opacity-50 px-4 my-2 flex items-center justify-center">
                            hi@sridhar.fyi
                        </a>
                    </div>
                </div>

                <ul className="flex   gap-1 ">
                    <li><Link to="/about" className="text-white bg-[#252525] px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#e3f551] rounded-2xl">About</Link></li>
                    <li><Link to="/contact" className="text-white bg-[#252525] px-4 py-1 bg-opacity-50 hover:text-[#121211] hover:bg-[#e3f551] rounded-2xl">Contact</Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;
