import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// MUI
import  { lightTheme } from './styles/theme.js'
import { ThemeProvider} from '@mui/material/styles'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
        <ThemeProvider theme={lightTheme}>
    <App /></ThemeProvider>
  </StrictMode>,
)
