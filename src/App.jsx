import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/layouts/Sidebar/Sidebar'
import RightPanel from './components/layouts/RightPanel/RightPanel'
import Dashboard from './pages/Dashboard/Dashboard'
import Orders from './pages/Orders/Orders'

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        
        <div className="main-content">
          <main className="main-screen">
            <div className="content-area">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </main>
        </div>
        
        <RightPanel />
      </div>
    </Router>
  )
}

export default App
