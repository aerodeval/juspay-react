import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Sidebar from './components/layouts/Sidebar/Sidebar'
import RightPanel from './components/layouts/RightPanel/RightPanel'
import Dashboard from './pages/Dashboard/Dashboard'
import Orders from './pages/Orders/Orders'
import Header from './components/layouts/Header/Header'

// Component that can use useLocation hook
function AppContent() {
  const location = useLocation();
  const isOrdersPage = location.pathname === '/orders';
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile (under 1024px)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle sidebar toggle functions
  const toggleLeftSidebar = useCallback(() => {
    setLeftSidebarOpen(!leftSidebarOpen);
  }, [leftSidebarOpen]);

  const toggleRightSidebar = useCallback(() => {
    setRightSidebarOpen(!rightSidebarOpen);
  }, [rightSidebarOpen]);

  const closeSidebars = () => {
    setLeftSidebarOpen(false);
    setRightSidebarOpen(false);
  };


  return (
    <div className="app-layout">
      {/* Overlay for mobile */}
      {(leftSidebarOpen || rightSidebarOpen) && isMobile && (
        <div className="sidebar-overlay" onClick={closeSidebars}></div>
      )}
      
      <Sidebar 
        isOpen={leftSidebarOpen} 
        isMobile={isMobile} 
        onClose={closeSidebars}
      />
      <div className="main-content">
        <Header 
          onToggleLeftSidebar={toggleLeftSidebar}
          onToggleRightSidebar={toggleRightSidebar}
        />
        <main className="main-screen">
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/default" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </main>
      </div>
      
      {(!isOrdersPage || rightSidebarOpen) && (
        <RightPanel 
          isOpen={rightSidebarOpen} 
          isMobile={isMobile} 
          onClose={closeSidebars}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
