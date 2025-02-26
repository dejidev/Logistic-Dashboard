// // Dashboard.js
// import React, { useState, useEffect, useCallback } from 'react';
// import { Package, Truck, AlertCircle } from 'lucide-react';

// import StatsCard from './components/Statscard';
// import ShipmentDetails from './components/ShipmentDetails';
// import ShipmentMap from './components/ShipmentMap';
// import Analytics from './components/Analytics';
// import ShipmentsTable from './components/ShipmentsTable';
// import Header from './components/Header';

// const MOCK_SHIPMENTS = [
//   {
//     id: 'SHP001',
//     status: 'In Transit',
//     origin: 'New York',
//     destination: 'Los Angeles',
//     currentLocation: 'Chicago',
//     estimatedDelivery: '2025-02-24',
//     priority: 'High'
//   },
//   {
//     id: 'SHP002',
//     status: 'Delivered',
//     origin: 'Miami',
//     destination: 'Seattle',
//     currentLocation: 'Seattle',
//     estimatedDelivery: '2025-02-22',
//     priority: 'Normal'
//   }
// ];

// const Dashboard = () => {
//   const [theme, setTheme] = useState('light');
//   const [shipments, setShipments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Generate mock shipment data
//   const generateMockShipment = useCallback(() => ({
//     id: `SHP${Math.floor(Math.random() * 1000)}`,
//     status: Math.random() > 0.5 ? 'In Transit' : 'Delivered',
//     origin: 'New York',
//     destination: 'Los Angeles',
//     currentLocation: 'Chicago',
//     estimatedDelivery: '2025-02-24',
//     priority: Math.random() > 0.7 ? 'High' : 'Normal'
//   }), []);

//   // WebSocket simulation
//   useEffect(() => {
//     const mockWsUpdate = setInterval(() => {
//       const newShipment = generateMockShipment();
//       setShipments(prev => {
//         // Keep only the last 5 shipments
//         const updatedShipments = [...prev, newShipment];
//         return updatedShipments.slice(-5);
//       });
//     }, 5000);

//     return () => clearInterval(mockWsUpdate);
//   }, [generateMockShipment]);

//   // Theme toggle
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   // Initial data fetch
//   useEffect(() => {
//     // Simulate API fetch delay
//     const fetchData = async () => {
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         setShipments(MOCK_SHIPMENTS);
//       } catch (error) {
//         console.error('Error fetching shipments:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Calculate stats based on actual shipment data
//   const calculateStats = useCallback(() => {
//     const activeShipments = shipments.filter(s => s.status === 'In Transit').length;
//     const deliveredToday = shipments.filter(s => s.status === 'Delivered').length;

//     return [
//       { label: 'Active Shipments', value: activeShipments.toString(), icon: Package },
//       { label: 'In Transit', value: activeShipments.toString(), icon: Truck },
//       { label: 'Delayed', value: '0', icon: AlertCircle },
//       { label: 'Delivered Today', value: deliveredToday.toString(), icon: Package }
//     ];
//   }, [shipments]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       <Header theme={theme} setTheme={setTheme} />

//       <main className="max-w-7xl mx-auto p-4">
//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {calculateStats().map((stat, index) => (
//             <StatsCard key={index} {...stat} theme={theme} />
//           ))}
//         </div>

//         {shipments.length > 0 ? (
//           <>
//             <ShipmentsTable shipments={shipments} theme={theme} />

//             {/* Dashboard Components */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//               <ShipmentDetails shipments={shipments} />
//               <ShipmentMap shipments={shipments} />
//               <Analytics shipments={shipments} />
//             </div>
//           </>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No shipment data available</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;







// Dashboard.js
import React, { useState, useEffect, useCallback } from 'react';
import { Package, Truck, AlertCircle, Bell, X, Check, Clock } from 'lucide-react';

import StatsCard from './components/Statscard';
import ShipmentDetails from './components/ShipmentDetails';
import ShipmentMap from './components/ShipmentMap';
import Analytics from './components/Analytics';
import ShipmentsTable from './components/ShipmentsTable';
import Header from './components/Header';

const MOCK_SHIPMENTS = [
  {
    id: 'SHP001',
    status: 'In Transit',
    origin: 'New York',
    destination: 'Los Angeles',
    currentLocation: 'Chicago',
    estimatedDelivery: '2025-02-24',
    priority: 'High'
  },
  {
    id: 'SHP002',
    status: 'Delivered',
    origin: 'Miami',
    destination: 'Seattle',
    currentLocation: 'Seattle',
    estimatedDelivery: '2025-02-22',
    priority: 'Normal'
  }
];

const MOCK_NOTIFICATIONS = [
  {
    id: 'notif1',
    message: 'Shipment SHP001 is delayed by 2 hours',
    time: '2 hours ago',
    read: false,
    type: 'warning'
  },
  {
    id: 'notif2',
    message: 'Shipment SHP002 has been delivered successfully',
    time: '3 hours ago',
    read: true,
    type: 'success'
  },
  {
    id: 'notif3',
    message: 'New shipment SHP003 has been created',
    time: '5 hours ago',
    read: false,
    type: 'info'
  }
];

const Dashboard = () => {
  const [theme, setTheme] = useState('light');
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [showNotifications, setShowNotifications] = useState(false);

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  // Toggle notifications panel
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Generate mock shipment data
  const generateMockShipment = useCallback(() => ({
    id: `SHP${Math.floor(Math.random() * 1000)}`,
    status: Math.random() > 0.5 ? 'In Transit' : 'Delivered',
    origin: 'New York',
    destination: 'Los Angeles',
    currentLocation: 'Chicago',
    estimatedDelivery: '2025-02-24',
    priority: Math.random() > 0.7 ? 'High' : 'Normal'
  }), []);

  // WebSocket simulation
  useEffect(() => {
    const mockWsUpdate = setInterval(() => {
      const newShipment = generateMockShipment();
      setShipments(prev => {
        // Keep only the last 5 shipments
        const updatedShipments = [...prev, newShipment];
        return updatedShipments.slice(-5);
      });

      // Add a notification for the new shipment
      if (Math.random() > 0.7) {
        const newNotification = {
          id: `notif${Math.floor(Math.random() * 1000)}`,
          message: `New shipment ${newShipment.id} has been created`,
          time: 'Just now',
          read: false,
          type: 'info'
        };

        setNotifications(prev => [newNotification, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(mockWsUpdate);
  }, [generateMockShipment]);

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  }, [theme]);

  // Initial data fetch
  useEffect(() => {
    // Simulate API fetch delay
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setShipments(MOCK_SHIPMENTS);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  // Calculate stats based on actual shipment data
  const calculateStats = useCallback(() => {
    const activeShipments = shipments.filter(s => s.status === 'In Transit').length;
    const deliveredToday = shipments.filter(s => s.status === 'Delivered').length;

    return [
      {
        label: 'Active Shipments',
        value: activeShipments.toString(),
        icon: Package,
        bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
        textColor: 'text-white'
      },
      {
        label: 'In Transit',
        value: activeShipments.toString(),
        icon: Truck,
        bgColor: 'bg-gradient-to-r from-green-500 to-green-600',
        textColor: 'text-white'
      },
      {
        label: 'Delayed',
        value: '0',
        icon: AlertCircle,
        bgColor: 'bg-gradient-to-r from-amber-500 to-amber-600',
        textColor: 'text-white'
      },
      {
        label: 'Delivered Today',
        value: deliveredToday.toString(),
        icon: Package,
        bgColor: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
        textColor: 'text-white'
      }
    ];
  }, [shipments]);

  // Notification dropdown
  const NotificationDropdown = () => {
    if (!showNotifications) return null;

    const getTypeIcon = (type) => {
      switch (type) {
        case 'warning': return <AlertCircle size={16} className="text-amber-500" />;
        case 'success': return <Check size={16} className="text-green-500" />;
        case 'info': default: return <Clock size={16} className="text-blue-500" />;
      }
    };

    return (
      <div className="absolute right-4 top-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-700 dark:text-gray-200">Notifications</h3>
          <div className="flex space-x-2">
            <button
              onClick={markAllAsRead}
              className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Mark all as read
            </button>
            <button
              onClick={() => setShowNotifications(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">No notifications</div>
          ) : (
            notifications.map(notif => (
              <div
                key={notif.id}
                className={`p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${notif.read ? 'bg-white dark:bg-gray-800' : 'bg-blue-50 dark:bg-gray-700'}`}
                onClick={() => markAsRead(notif.id)}
              >
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">{getTypeIcon(notif.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 dark:text-gray-200">{notif.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-2 text-center border-t border-gray-200 dark:border-gray-700">
          <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            View all notifications
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="bg-white shadow-md sticky top-0 z-10 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <Header
            theme={theme}
            setTheme={setTheme}
            unreadCount={unreadCount}
            toggleNotifications={toggleNotifications}
          />
        </div>
      </div>

      {/* Notification Dropdown */}
      <div className="max-w-7xl mx-auto relative">
        <NotificationDropdown />
      </div>

      <main className="max-w-7xl mx-auto p-4 pt-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {calculateStats().map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-lg shadow-md p-4 ${stat.textColor}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-90">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-full">
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {shipments.length > 0 ? (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 dark:bg-gray-800 dark:border dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Active Shipments</h2>
              </div>
              <ShipmentsTable shipments={shipments} theme={theme} />
            </div>

            {/* Dashboard Components */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Shipment Details</h2>
                </div>
                <div className="p-4">
                  <ShipmentDetails shipments={shipments} />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Shipment Map</h2>
                </div>
                <div className="p-4">
                  <ShipmentMap shipments={shipments} />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-2 dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Analytics</h2>
                </div>
                <div className="p-4">
                  <Analytics shipments={shipments} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center dark:bg-gray-800 dark:border dark:border-gray-700">
            <Package size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">No shipment data available</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Create New Shipment
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;