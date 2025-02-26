// // ShipmentMap.js
// import React from 'react';
// import { MapPin } from 'lucide-react';

// const ShipmentMap = ({ shipments }) => (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
//         <h3 className="text-lg font-semibold mb-4">Shipment Map</h3>
//         <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center">
//             <MapPin size={32} className="text-gray-400 mb-2" />
//             <p className="text-gray-500">Map Visualization</p>
//             {shipments.length > 0 && (
//                 <p className="text-sm text-gray-400 mt-2">
//                     Tracking {shipments.length} active shipments
//                 </p>
//             )}
//         </div>
//     </div>
// );

// export default ShipmentMap;
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet styles

const ShipmentMap = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Shipment Map</h3>

            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center">
                <MapContainer 
                    center={[51.505, -0.09]} // Default map center
                    zoom={13} 
                    scrollWheelZoom={false} 
                    className="w-full h-full"
                >
                    <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                </MapContainer>
            </div>
        </div>
    );
};

export default ShipmentMap;
