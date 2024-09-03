import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import WeatherWidget from './WeatherWidget';



import ActionButtons from './ActionButtons';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <Header />
                <div className="main-content">
                    <div className="stats-overview">
                        <WeatherWidget />
                        <WeatherWidget />
                        <WeatherWidget />
                        
                    </div>
                    
                   
                    <ActionButtons />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
