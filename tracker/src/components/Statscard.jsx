import React from 'react'

const StatsCard = ({ label, value, icon: Icon, theme }) => (
    <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                <p className="text-2xl font-bold mt-1">{value}</p>
            </div>
            <Icon size={24} className="text-blue-500" />
        </div>
    </div>
);

export default StatsCard
