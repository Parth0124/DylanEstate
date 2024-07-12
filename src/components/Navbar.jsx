/* eslint-disable no-unused-vars */
// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import frame from '../assets/Frame.png';
import frame1 from '../assets/Frame-1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="text-[13px] xl:text-[16px] bg-white shadow-md p-1 flex justify-between px-3 lg:px-0 lg:justify-around items-center fixed top-0 left-0 w-full z-10 border-b border-gray-200">
            <div className="flex flex-col items-start">
                <img src={logo} alt="Logo" className="" />
                <span className="text-lg font-semibold" style={{ color: '#B0854C' }}>Dylan Estate</span>
            </div>

            <div>
                <button
                    onClick={toggleNavbar}
                    className="lg:hidden flex items-center p-2 ml-0 w-10 h-10 justify-start text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`flex-col lg:flex lg:flex-row ${windowWidth > 768 ? 'items-center' : 'items-start'} gap-2 sm:gap-3 space-y-4 md:space-y-0 lg:space-x-10 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                    <a href="#properties" className="font-bold text-gray-900">PROPERTIES</a>
                    <a href="/dylanEstate/" className="font-bold text-gray-900">MY DASHBOARD/ACTIVITY</a>
                    <a href="/dylanEstate/list" className="font-bold text-gray-900">LIST YOUR PROPERTY</a>
                    <a href="#contact" className="font-bold text-gray-900">CONTACT US</a>
                    <a href="#more" className="font-bold text-gray-900">MORE</a>
                    {windowWidth > 768 && <span className="border-l-2 border-gray-900 h-4"></span>}
                    <div className='flex gap-5'>
                        <a href="#languages" className="hover:text-gray-900"> <img src={frame} className='w-4 h-4 md:w-5 md:h-5' alt="" /> </a>
                        <a href="#user" className="hover:text-gray-900"> <img src={frame1} className='w-4 h-4 md:w-5 md:h-5' alt="" /> </a>
                    </div>
                </div>
                
            </div>

        </nav>
    );
};

export default Navbar;