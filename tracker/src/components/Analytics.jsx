import React, { useState } from 'react';
import { Bell, Sun, Moon, BarChart, PieChart } from 'lucide-react';
import { Pie } from 'react-chartjs-2'; // For pie chart
import { Bar } from 'react-chartjs-2'; // For bar chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registering necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Analytics = ({ shipments }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const shipmentStatuses = shipments.reduce(
        (acc, shipment) => {
            if (shipment.status === 'Delivered') acc.delivered++;
            else if (shipment.status === 'In Transit') acc.inTransit++;
            else if (shipment.status === 'Pending') acc.pending++;
            return acc;
        },
        { delivered: 0, inTransit: 0, pending: 0 }
    );

    const pieData = {
        labels: ['Delivered', 'In Transit', 'Pending'],
        datasets: [
            {
                label: 'Shipment Status Breakdown',
                data: [shipmentStatuses.delivered, shipmentStatuses.inTransit, shipmentStatuses.pending],
                backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
                borderColor: ['#4caf50', '#ff9800', '#f44336'],
                borderWidth: 1,
            },
        ],
    };

    const barData = {
        labels: ['Delivered', 'In Transit', 'Pending'],
        datasets: [
            {
                label: 'Shipment Status Breakdown',
                data: [shipmentStatuses.delivered, shipmentStatuses.inTransit, shipmentStatuses.pending],
                backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
                borderColor: ['#4caf50', '#ff9800', '#f44336'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // To make sure the chart is responsive and doesn't get squished
        plugins: {
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Analytics Overview</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                {/* Bar Chart */}
                <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center px-4 py-8">
                    <Bar data={barData} options={options} />
                    <p className="mt-2 text-gray-500">Shipment Analytics</p>
                </div>

                {/* Pie Chart */}
                <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center px-4 py-8">
                    <Pie data={pieData} options={options} />
                    <p className="mt-2 text-center text-gray-500">Shipment Status</p>
                </div>
            </div>


        </div>
    );
};

export default Analytics;
