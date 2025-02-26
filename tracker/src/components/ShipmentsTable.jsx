// // ShipmentsTable.js

// import React from 'react'

// const ShipmentsTable = ({ shipments, theme }) => (
//     <div className={`rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
//         <div className="p-4 border-b dark:border-gray-700">
//             <h2 className="text-xl font-semibold">Active Shipments</h2>
//         </div>
//         <div className="overflow-x-auto">
//             <table className="w-full">
//                 <thead className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}>
//                     <tr>
//                         <th className="px-6 py-3 text-left">ID</th>
//                         <th className="px-6 py-3 text-left">Status</th>
//                         <th className="px-6 py-3 text-left">Origin</th>
//                         <th className="px-6 py-3 text-left">Destination</th>
//                         <th className="px-6 py-3 text-left">Est. Delivery</th>
//                         <th className="px-6 py-3 text-left">Priority</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {shipments.map((shipment) => (
//                         <tr
//                             key={shipment.id}
//                             className={`border-b dark:border-gray-700 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
//                                 }`}
//                         >
//                             <td className="px-6 py-4">{shipment.id}</td>
//                             <td className="px-6 py-4">
//                                 <span className={`px-2 py-1 rounded-full text-sm ${shipment.status === 'In Transit'
//                                     ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
//                                     : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
//                                     }`}>
//                                     {shipment.status}
//                                 </span>
//                             </td>
//                             <td className="px-6 py-4">{shipment.origin}</td>
//                             <td className="px-6 py-4">{shipment.destination}</td>
//                             <td className="px-6 py-4">{shipment.estimatedDelivery}</td>
//                             <td className="px-6 py-4">
//                                 <span className={`px-2 py-1 rounded-full text-sm ${shipment.priority === 'High'
//                                     ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
//                                     : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
//                                     }`}>
//                                     {shipment.priority}
//                                 </span>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
// );


// export default ShipmentsTable



// import React from 'react';
// import { Package, ArrowRight, Clock, MoreVertical, Filter } from 'lucide-react';

// const ShipmentsTable = ({ shipments, theme }) => {
//     // Format date to be more readable
//     const formatDate = (dateString) => {
//         const options = { month: 'short', day: 'numeric', year: 'numeric' };
//         return new Date(dateString).toLocaleDateString(undefined, options);
//     };

//     // Generate status badge with appropriate styling
//     const StatusBadge = ({ status }) => {
//         let bgColor, textColor, icon;

//         switch (status) {
//             case 'In Transit':
//                 bgColor = 'bg-blue-100 dark:bg-blue-900/40';
//                 textColor = 'text-blue-700 dark:text-blue-300';
//                 icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>;
//                 break;
//             case 'Delivered':
//                 bgColor = 'bg-green-100 dark:bg-green-900/40';
//                 textColor = 'text-green-700 dark:text-green-300';
//                 icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>;
//                 break;
//             case 'Delayed':
//                 bgColor = 'bg-amber-100 dark:bg-amber-900/40';
//                 textColor = 'text-amber-700 dark:text-amber-300';
//                 icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>;
//                 break;
//             default:
//                 bgColor = 'bg-gray-100 dark:bg-gray-700';
//                 textColor = 'text-gray-700 dark:text-gray-300';
//                 icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5"></span>;
//         }

//         return (
//             <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
//                 {icon}
//                 {status}
//             </span>
//         );
//     };

//     // Generate priority badge with appropriate styling
//     const PriorityBadge = ({ priority }) => {
//         let bgColor, textColor;

//         switch (priority) {
//             case 'High':
//                 bgColor = 'bg-red-100 dark:bg-red-900/40';
//                 textColor = 'text-red-700 dark:text-red-300';
//                 break;
//             case 'Normal':
//                 bgColor = 'bg-gray-100 dark:bg-gray-700';
//                 textColor = 'text-gray-700 dark:text-gray-300';
//                 break;
//             default:
//                 bgColor = 'bg-gray-100 dark:bg-gray-700';
//                 textColor = 'text-gray-700 dark:text-gray-300';
//         }

//         return (
//             <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
//                 {priority}
//             </span>
//         );
//     };

//     // Render location info with origin and destination
//     const LocationInfo = ({ origin, destination }) => (
//         <div className="flex items-center">
//             <span className="text-gray-800 dark:text-gray-200 font-medium">{origin}</span>
//             <ArrowRight size={14} className="mx-2 text-gray-400" />
//             <span className="text-gray-800 dark:text-gray-200 font-medium">{destination}</span>
//         </div>
//     );

//     return (
//         <div className="overflow-x-auto">
//             <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
//                 <h2 className="text-lg font-semibold text-red-700 dark:text-white flex items-center">
//                     <Package size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
//                     Active Shipments
//                 </h2>
//                 <div className="flex space-x-2">
//                     <button className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md flex items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
//                         <Filter size={14} className="mr-1.5" />
//                         Filter
//                     </button>
//                     <span className="inline-flex rounded-md shadow-sm">
//                         <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
//                             + Add Shipment
//                         </button>
//                     </span>
//                 </div>
//             </div>
//             <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                 <thead className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
//                     <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                             Shipment ID
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                             Status
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                             Route
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                             Est. Delivery
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                             Priority
//                         </th>
//                         <th scope="col" className="relative px-6 py-3">
//                             <span className="sr-only">Actions</span>
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} divide-y divide-gray-200 dark:divide-gray-700`}>
//                     {shipments.map((shipment) => (
//                         <tr
//                             key={shipment.id}
//                             className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} cursor-pointer transition-colors`}
//                         >
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="flex items-center">
//                                     <div className="h-8 w-8 flex-shrink-0 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center">
//                                         <Package size={16} className="text-blue-600 dark:text-blue-400" />
//                                     </div>
//                                     <span className="font-medium text-gray-800 dark:text-gray-200">{shipment.id}</span>
//                                 </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <StatusBadge status={shipment.status} />
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <LocationInfo origin={shipment.origin} destination={shipment.destination} />
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="flex items-center text-gray-700 dark:text-gray-300">
//                                     <Clock size={14} className="mr-1.5 text-gray-500" />
//                                     {formatDate(shipment.estimatedDelivery)}
//                                 </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <PriorityBadge priority={shipment.priority} />
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
//                                     <MoreVertical size={16} />
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {shipments.length === 0 && (
//                 <div className="text-center py-12">
//                     <Package size={36} className="mx-auto text-gray-400 mb-4" />
//                     <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">No shipments found</h3>
//                     <p className="mt-1 text-gray-500 dark:text-gray-400">There are no active shipments to display.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ShipmentsTable;















import React from 'react';
import { Package, ArrowRight, Clock, MoreVertical, Filter } from 'lucide-react';

const ShipmentsTable = ({ shipments, theme }) => {
    // Format date to be more readable
    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Generate status badge with appropriate styling
    const StatusBadge = ({ status }) => {
        let bgColor, textColor, icon;

        switch (status) {
            case 'In Transit':
                bgColor = theme === 'dark' ? 'bg-blue-900/40' : 'bg-blue-100';
                textColor = theme === 'dark' ? 'text-blue-300' : 'text-blue-800';
                icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>;
                break;
            case 'Delivered':
                bgColor = theme === 'dark' ? 'bg-green-900/40' : 'bg-green-100';
                textColor = theme === 'dark' ? 'text-green-300' : 'text-green-800';
                icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>;
                break;
            case 'Delayed':
                bgColor = theme === 'dark' ? 'bg-amber-900/40' : 'bg-amber-100';
                textColor = theme === 'dark' ? 'text-amber-300' : 'text-amber-800';
                icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>;
                break;
            default:
                bgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
                textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
                icon = <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5"></span>;
        }

        return (
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
                {icon}
                {status}
            </span>
        );
    };

    // Generate priority badge with appropriate styling
    const PriorityBadge = ({ priority }) => {
        let bgColor, textColor;

        switch (priority) {
            case 'High':
                bgColor = theme === 'dark' ? 'bg-red-900/40' : 'bg-red-100';
                textColor = theme === 'dark' ? 'text-red-300' : 'text-red-800';
                break;
            case 'Normal':
                bgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100';
                textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
                break;
            default:
                bgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
                textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-800';
        }

        return (
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
                {priority}
            </span>
        );
    };

    // Render location info with origin and destination
    const LocationInfo = ({ origin, destination }) => (
        <div className="flex items-center">
            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>{origin}</span>
            <ArrowRight size={14} className="mx-2 text-gray-500 dark:text-gray-400" />
            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>{destination}</span>
        </div>
    );

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Package size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                    Active Shipments
                </h2>
                <div className="flex space-x-2">
                    <button className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-300">
                        <Filter size={14} className="mr-1.5" />
                        Filter
                    </button>
                    <span className="inline-flex rounded-md shadow-sm">
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            + Add Shipment
                        </button>
                    </span>
                </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className={theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100 border-b border-gray-300'}>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400">
                            Shipment ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400">
                            Route
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400">
                            Est. Delivery
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400">
                            Priority
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} divide-y divide-gray-200 dark:divide-gray-700`}>
                    {shipments.map((shipment) => (
                        <tr
                            key={shipment.id}
                            className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-blue-50'} cursor-pointer transition-colors`}
                        >
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 flex-shrink-0 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center shadow-sm">
                                        <Package size={16} className="text-blue-700 dark:text-blue-400" />
                                    </div>
                                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                        {shipment.id}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <StatusBadge status={shipment.status} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <LocationInfo origin={shipment.origin} destination={shipment.destination} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                                    <Clock size={14} className="mr-1.5 text-gray-600 dark:text-gray-500" />
                                    {formatDate(shipment.estimatedDelivery)}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <PriorityBadge priority={shipment.priority} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                                    <MoreVertical size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {shipments.length === 0 && (
                <div className="text-center py-12">
                    <Package size={36} className="mx-auto text-gray-500 dark:text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">No shipments found</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">There are no active shipments to display.</p>
                </div>
            )}
        </div>
    );
};

export default ShipmentsTable;