import React from 'react';
import './RightPanel.css';
import {notifications,iconMap, activities,contactsData} from "../../../data/content"
import ImageAvatar from '../../ui/Avatar';

function RightPanel() {
  return (
    <aside className="right-panel">
      <div className="panel-content">
    
      <div className="notifications">
      <h4 className="section-title">Notifications</h4>
      <div className="notification-list">
        {notifications.map((note) => (
          <div className="notification-item" key={note.id}>
            <div className="notification-icon">
              <img
                src={iconMap[note.type]}
                alt={note.type}
                className="icon"
              />
            </div>
            <div className="notification-content">
              <p className="notification-text">{note.message}</p>
              <span className="notification-time">{note.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
        
    <div className="activities">
      <h4 className="section-title">Activities</h4>
      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-item" key={activity.id}>
            <div className="activity-avatar">

              <ImageAvatar imgSrc={activity.avatarImg} 
              />
            </div>
            <div className="activity-content">
              <p className="activity-text">{activity.text}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='contacts'>
    <h4 className="section-title">Contacts</h4>
    <div className="contact-list">
      {contactsData.map((contact) => (

        <div className='contact-item'>
           <div className="contact-avatar">

<ImageAvatar imgSrc={contact.avatar} 
  text={contact.name}
 />
</div>

        </div>


      ))} </div>
        
  
    </div>
      </div>
    </aside>
  );
}

export default RightPanel;
