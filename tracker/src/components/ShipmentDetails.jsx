import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon, Package, Truck, AlertCircle, Map, BarChart } from 'lucide-react';


const ShipmentDetails = ({ shipments }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-300">Shipment Details</h3>
        <div className="space-y-4">
            {shipments.map(shipment => (
                <div key={shipment.id} className="border-b dark:border-gray-700 pb-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-medium text-gray-200">{shipment.id}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Current Location: {shipment.currentLocation}
                            </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-sm ${shipment.priority === 'High'
                            ? 'bg-red-100 text-red-400 dark:bg-red-900 dark:text-red-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                            }`}>
                            {shipment.priority}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ShipmentDetails
