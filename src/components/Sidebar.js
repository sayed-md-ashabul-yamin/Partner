import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Skydash</h2>
            </div>
            <ul className="sidebar-menu">
                <li className="menu-item active">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-layer-group"></i>
                    <span>UI Elements</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-file-alt"></i>
                    <span>Form Elements</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-chart-bar"></i>
                    <span>Charts</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-table"></i>
                    <span>Tables</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-icons"></i>
                    <span>Icons</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-user"></i>
                    <span>User Pages</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-exclamation-circle"></i>
                    <span>Error Pages</span>
                </li>
                <li className="menu-item">
                    <i className="fas fa-book"></i>
                    <span>Documentation</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
