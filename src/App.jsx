import { useState, useEffect } from 'react'
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
  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };

  const closeSidebars = () => {
    setLeftSidebarOpen(false);
    setRightSidebarOpen(false);
  };

  // Add click handlers to buttons
  useEffect(() => {
    const leftSidebarBtn = document.getElementById('leftSidebar');
    const rightSidebarBtn = document.getElementById('rightSidebar');

    if (leftSidebarBtn) {
      leftSidebarBtn.addEventListener('click', toggleLeftSidebar);
    }

    if (rightSidebarBtn) {
      rightSidebarBtn.addEventListener('click', toggleRightSidebar);
    }

    return () => {
      if (leftSidebarBtn) {
        leftSidebarBtn.removeEventListener('click', toggleLeftSidebar);
      }
      if (rightSidebarBtn) {
        rightSidebarBtn.removeEventListener('click', toggleRightSidebar);
      }
    };
  }, []);

  return (
    <div className={`app-layout ${isOrdersPage ? 'no-right-panel' : ''}`}>
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
        <Header></Header>
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
      
      {!isOrdersPage && (
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
