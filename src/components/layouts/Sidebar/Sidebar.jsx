import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import ImageAvatar from '../../ui/Avatar';
import { navigationContent,userData } from '../../../data/content';



function Sidebar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openSections, setOpenSections] = React.useState({});
  const location = useLocation();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSectionClick = (sectionName) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  // Helper function to get icon as image
  const getIconImage = (iconName) => {
    if (!iconName) return null;
    return (
      <img 
        src={`/src/assets/icons/${iconName}.svg`} 
        alt={iconName}
        style={{ width: 20, height: 20 }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    );
  };

  const drawer = (
    <div className="sidebar-content">
      <div className="user-header">
          <div>
  
<ImageAvatar imgSrc={userData.userImg} text={"ByeWind"} alt={userData.name + "image"} />

 </div>
      </div>
      <div className="recents-header">
        <div className=" favourites-section">
        <div><span>Favourites</span>
        <span className='recent'>Recently</span></div>

        </div>
        <div className="section">
          <Link 
            to="/dashboard" 
            className={`section-button ${location.pathname === '/' || location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <div className="dot"></div>
            <div className="section-content">
              <div className="section-icon"></div>
              <span className="section-text">Dashboard</span>
            </div>
          </Link>
        </div>
        <div className="section">
          <Link 
            to="/orders" 
            className={`section-button ${location.pathname === '/orders' ? 'active' : ''}`}
          >
            <div className="dot"></div>
            <div className="section-content">
              <div className="section-icon"></div>
              <span className="section-text">Orders</span>
            </div>
          </Link>
        </div>
      </div>

      <nav className="sidebar-nav">
        {Object.entries(navigationContent).map(([categoryName, categoryData]) => (
          <div key={categoryName} className="category">
            <div className="category-header">
              <span className="category-title">{categoryName}</span>
            </div>
            
            {/* Sections */}
            {categoryData.sections && categoryData.sections.map((section) => (
              <div key={section.name} className="section">
                <button 
                  className="section-button"
                  onClick={() => section.subsections && section.subsections.length > 0 && handleSectionClick(section.name)}
                >
                {section.subsections && section.subsections.length > 0 ? (
  <div className="expand-icon">
 <div className={`arrow ${openSections[section.name] ? 'open' : ''}`} aria-hidden="true"></div>
    
  
  </div>
) : (
  <div className="no-icon"></div> // or null if you want nothing
)}


                  <div className="section-content">
                    <div className="section-icon">
                      {section.hasIcon && getIconImage(section.icon)}
                    </div>
                    <span className="section-text">{section.name}</span>
                  </div>
              
                </button>
                
                {/* Subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className={`subsections ${openSections[section.name] ? 'open' : ''}`}>
                    {section.subsections.map((subsection) => (
                      <button key={subsection.name} className="subsection-button">
                        <div className="subsection-icon">
                          {subsection.hasIcon && getIconImage(subsection.icon)}
                        </div>
                        <span className="subsection-text">{subsection.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </div>
        ))}
      </nav>
    </div>
  );



  return (
    // <div className="sidebar-container">
    //   {/* Mobile Header */}
    //   <header className="mobile-header">
    //     <button 
    //       className="menu-button"
    //       onClick={handleDrawerToggle}
    //       aria-label="open drawer"
    //     >
    //       ☰
    //     </button>
    //     <h1 className="app-title">Dashboard</h1>
    //   </header>

    //   {/* Mobile Overlay */}
    //   {mobileOpen && (
    //     <div 
    //       className="mobile-overlay"
    //       onClick={handleDrawerClose}
    //     ></div>
    //   )}

    //   {/* Sidebar */}
      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        {drawer}
      </aside>

    // </div>
  );
}


export default Sidebar;
