// import React, { useState, useEffect } from 'react';
// import { Bell, Sun, Moon, Package, Truck, AlertCircle, Map, BarChart } from 'lucide-react';
// import ShipmentDetails from './ShipmentDetails';
// import ShipmentMap from './ShipmentMap';
// import Analytics from './Analytics';

// const Dashboard = () => {
//     const [theme, setTheme] = useState('light');
//     const [shipments, setShipments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Theme toggle
//     useEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme);
//     }, [theme]);

//     // WebSocket connection
//     useEffect(() => {
//         // Mock WebSocket for demo
//         const mockWsUpdate = setInterval(() => {
//             const newShipment = {
//                 id: `SHP${Math.floor(Math.random() * 1000)}`,
//                 status: Math.random() > 0.5 ? 'In Transit' : 'Delivered',
//                 origin: 'New York',
//                 destination: 'Los Angeles',
//                 currentLocation: 'Chicago',
//                 estimatedDelivery: '2025-02-24',
//                 priority: Math.random() > 0.7 ? 'High' : 'Normal'
//             };
//             setShipments(prev => [...prev.slice(-4), newShipment]);
//         }, 5000);

//         return () => clearInterval(mockWsUpdate);
//     }, []);

//     // Initial data fetch
//     useEffect(() => {
//         // Mock data fetch
//         const mockData = [
//             {
//                 id: 'SHP001',
//                 status: 'In Transit',
//                 origin: 'New York',
//                 destination: 'Los Angeles',
//                 currentLocation: 'Chicago',
//                 estimatedDelivery: '2025-02-24',
//                 priority: 'High'
//             },
//             {
//                 id: 'SHP002',
//                 status: 'Delivered',
//                 origin: 'Miami',
//                 destination: 'Seattle',
//                 currentLocation: 'Seattle',
//                 estimatedDelivery: '2025-02-22',
//                 priority: 'Normal'
//             }
//         ];

//         setShipments(mockData);
//         setLoading(false);
//     }, []);

//     return (
//         <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//             {/* Header */}
//             <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//                 <div className="max-w-7xl mx-auto flex justify-between items-center">
//                     <h1 className="text-2xl font-bold">Logistics Dashboard</h1>
//                     <div className="flex items-center gap-4">
//                         <button
//                             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//                             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                         >
//                             {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//                         </button>
//                         <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//                             <Bell size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="max-w-7xl mx-auto p-4">
//                 {/* Stats Overview */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                     {[
//                         { label: 'Active Shipments', value: '24', icon: Package },
//                         { label: 'In Transit', value: '18', icon: Truck },
//                         { label: 'Delayed', value: '3', icon: AlertCircle },
//                         { label: 'Delivered Today', value: '12', icon: Package }
//                     ].map((stat, index) => (
//                         <div
//                             key={index}
//                             className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
//                                 } shadow-lg`}
//                         >
//                             <div className="flex items-center justify-between">
//                                 <div>
//                                     <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
//                                     <p className="text-2xl font-bold mt-1">{stat.value}</p>
//                                 </div>
//                                 <stat.icon size={24} className="text-blue-500" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Shipments Table */}
//                 <div className={`rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
//                     <div className="p-4 border-b dark:border-gray-700">
//                         <h2 className="text-xl font-semibold">Active Shipments</h2>
//                     </div>
//                     <div className="overflow-x-auto">
//                         <table className="w-full">
//                             <thead className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}>
//                                 <tr>
//                                     <th className="px-6 py-3 text-left">ID</th>
//                                     <th className="px-6 py-3 text-left">Status</th>
//                                     <th className="px-6 py-3 text-left">Origin</th>
//                                     <th className="px-6 py-3 text-left">Destination</th>
//                                     <th className="px-6 py-3 text-left">Est. Delivery</th>
//                                     <th className="px-6 py-3 text-left">Priority</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {shipments.map((shipment) => (
//                                     <tr
//                                         key={shipment.id}
//                                         className={`border-b dark:border-gray-700 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
//                                             }`}
//                                     >
//                                         <td className="px-6 py-4">{shipment.id}</td>
//                                         <td className="px-6 py-4">
//                                             <span className={`px-2 py-1 rounded-full text-sm ${shipment.status === 'In Transit'
//                                                 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
//                                                 : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
//                                                 }`}>
//                                                 {shipment.status}
//                                             </span>
//                                         </td>
//                                         <td className="px-6 py-4">{shipment.origin}</td>
//                                         <td className="px-6 py-4">{shipment.destination}</td>
//                                         <td className="px-6 py-4">{shipment.estimatedDelivery}</td>
//                                         <td className="px-6 py-4">
//                                             <span className={`px-2 py-1 rounded-full text-sm ${shipment.priority === 'High'
//                                                 ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
//                                                 : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
//                                                 }`}>
//                                                 {shipment.priority}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Dashboard Components */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//                     <ShipmentDetails shipments={shipments} />
//                     <ShipmentMap shipments={shipments} />
//                     <Analytics shipments={shipments} />
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Dashboard;