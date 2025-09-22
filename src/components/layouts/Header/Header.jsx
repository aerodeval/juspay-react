import React from 'react';
import { iconMap } from '../../../data/content';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../data/themeSlice";
import './Header.css';

function Header({ onToggleLeftSidebar, onToggleRightSidebar }) {

  const dispatch = useDispatch();
 const headerButtons = [
 
    {
      label: "Theme",
      icon: "/assets/icons/Sun.svg",
      id: "themeSwitch",
      fn: () => dispatch(toggleTheme())
    } ,{ label: "History", icon: "/assets/icons/ClockCounterClockwise.svg" },
    { label: "Notifications", icon: "/assets/icons/Bell.svg" },
    { label: "Sidebar", icon: "/assets/icons/Sidebar.svg", onClick: onToggleRightSidebar },
  ];

 
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  return (
    <header className="app-header">
      <div className="header-left">
        <div>
          <button 
            className="action-button" 
            aria-label="Sidebar"
            onClick={onToggleLeftSidebar}
          >
            <img src={iconMap.sidebar} className="action-icon" />
          </button>
        </div>
        <div>
        <button className="action-button" aria-label="Favourite">
        <img src={iconMap.star}  className="action-icon" /></button>
        </div>
        <div className='breadcrumb-container'>
        {pathSegments.length === 0 ? (
        <span className="breadcrumb-item active">Default</span>
      ) : (
        <div className='breadcrumb-container'>
          <span className="breadcrumb-item">Dashboards</span>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={index}>
              <span className="breadcrumb-separator">/</span>
              <span className={`breadcrumb-item ${index === pathSegments.length - 1 ? "active" : ""}`}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </span>
            </React.Fragment>
          ))}</div>   )}
        </div>

      </div>
      
    
      
      <div className="header-right">

      <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <span className="search-icon">    <img src={iconMap.Search} alt="Search" /></span>
            <span className='search-command'>⌘/</span>
          </div>
        <div className="header-actions">
        {headerButtons.map((btn) => (
        <button
        id={btn.id}
          key={btn.label}
          className="action-button"
          aria-label={btn.label}
          onClick={btn.fn || btn.onClick}
        >
          <img src={btn.icon} alt={btn.label} className="action-icon" />
        </button>
      ))}
          
         
        </div>

        
      </div>
    </header>
  );
}

export default Header;
