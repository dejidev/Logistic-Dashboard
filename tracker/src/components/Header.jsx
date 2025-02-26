
// // Header.js

// import React, { useState, useEffect } from 'react';
// import { Bell, Sun, Moon, Package, Truck, AlertCircle, Map, BarChart } from 'lucide-react';

// const Header = ({ theme, setTheme }) => (
//     <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Logistics Dashboard</h1>
//             <div className="flex items-center gap-4">
//                 <button
//                     onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//                     className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                 >
//                     {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//                     <Bell size={20} />
//                 </button>
//             </div>
//         </div>
//     </header>
// );


// export default Header








// Header.js
import React from 'react';
import { Bell, Sun, Moon, Search, Menu, User } from 'lucide-react';
import logo from '../img/im.png'

const Header = ({ theme, setTheme, unreadCount = 0, toggleNotifications }) => {
    return (
        <header className="py-3 px-4 bg-white shadow-md dark:bg-gray-800 transition-colors duration-200">
            <div className="flex items-center justify-between">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-4">
                    <div className="lg:hidden">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <Menu size={20} className="text-gray-700 dark:text-gray-200" />
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 md:h-16 md:w-16 flex items-center justify-center">
  
                            <img src={logo} alt="logo" className=" filter grayscale" />
                        </div>
 
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white hidden sm:block">Logi-Stick Dashboard</h1>
                    </div>
                </div>

                {/* Search Bar - Only on medium+ screens */}
                <div className="hidden md:block flex-1 max-w-md mx-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search shipments, orders..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Action Items */}
                <div className="flex items-center space-x-1 sm:space-x-3">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
                        aria-label="Search"
                    >
                        <Search size={20} className="text-gray-700 dark:text-gray-200 md:hidden" />
                    </button>

                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ?
                            <Moon size={20} className="text-gray-100" /> :
                            <Sun size={20} className="text-gray-200" />
                        }
                    </button>

                    <button
                        onClick={toggleNotifications}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
                        aria-label="Notifications"
                    >
                        <Bell size={20} className="text-gray-700 dark:text-gray-200" />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {unreadCount > 9 ? '9+' : unreadCount}
                            </span>
                        )}
                    </button>

                    <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center border border-gray-300 dark:border-gray-600">
                        <User size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;