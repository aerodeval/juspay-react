import { useState } from 'react'
import './App.css'
import Sidebar from './components/layouts/Sidebar/Sidebar'
// import Header from './components/layouts/Header/Header'
import RightPanel from './components/layouts/RightPanel/RightPanel'
import Card from './components/ui/Card'
import EcommerceTabs from './components/dashboard/EcommerceTabs/EcommerceTabs'
import MainContent from './components/layouts/MainContent/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-layout">
      <Sidebar />
      
      <div className="main-content">
        {/* <Header /> */}
        
        <main className="main-screen">
          <div className="content-area">
         <MainContent></MainContent>
          </div>
        </main>
      </div>
      
      <RightPanel />
    </div>
  )
}

export default App
