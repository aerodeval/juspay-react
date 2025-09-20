import React from 'react';
import './RightPanel.css';
import {notifications,iconMap} from "../../../data/content"

function RightPanel() {
  return (
    <aside className="right-panel">
      <div className="panel-content">
    
      <div className="notifications">
      <h4 className="section-title">Notifications</h4>
      <div className="activity-list">
        {notifications.map((note) => (
          <div className="activity-item" key={note.id}>
            <div className="activity-icon">
              <img
                src={iconMap[note.type]}
                alt={note.type}
                className="icon"
              />
            </div>
            <div className="activity-content">
              <p className="activity-text">{note.message}</p>
              <span className="activity-time">{note.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
        
        <div className="notifications">
          <h4 className="section-title">Notifications</h4>
          <div className="notification-list">
            <div className="notification-item">
              <div className="notification-dot"></div>
              <div className="notification-content">
                <p className="notification-text">New message from team</p>
                <span className="notification-time">5 min ago</span>
              </div>
            </div>
            
            <div className="notification-item">
              <div className="notification-dot"></div>
              <div className="notification-content">
                <p className="notification-text">Meeting reminder</p>
                <span className="notification-time">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightPanel;
