import React from 'react';
import './ActionButtons.css';

const ActionButtons = () => {
    return (
        <div className="action-buttons">
            <button className="btn btn-primary">Create New Request</button>
            <button className="btn btn-secondary">Remittance Request</button>
        </div>
    );
};

export default ActionButtons;
