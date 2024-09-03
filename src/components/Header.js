import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="greeting">
                    <h1>Welcome Aamir</h1>
                    <p>All systems are running smoothly! You have 3 unread alerts!</p>
                </div>
                <div className="user-info">
                    <span>Today (10 Jan 2021)</span>
                    <img src="profile-pic-url" alt="User" className="profile-pic"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
