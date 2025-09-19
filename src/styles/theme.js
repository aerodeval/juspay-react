import { createTheme } from '@mui/material/styles'

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F7F9FB',         // --primary
    },
    secondary: {
      main: '#A8C5DA',         // --secondary
    },
    info: {
      main: '#E3F5FF',         // --blue
    },
    success: {
      main: '#4AA785',         // --green
    },
    warning: {
      main: '#FFC555',         // --yellow
    },
    error: {
      main: '#f44336',         // fallback standard red
    },
    background: {
      default: '#ffffff',      // --background
      paper: '#F7F9FB',        // --light
    },
    text: {
      primary: '#1C1C1C',      // --foreground
      secondary: '#8A8CD9',    // --indigo
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
    fontSize: 14,
    h1: { fontSize: '2rem', fontWeight: 600 },
    h2: { fontSize: '1.5rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },


  components: {
    MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            padding: '24px',
            boxShadow: 'none',
          },
        },
      },
  },

})

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C6C7F8',         // --brand 
    },
    secondary: {
      main: '#95A4FC',         // --secondary-indigo
    },
    info: {
      main: '#E3F5FF',         // --blue
    },
    success: {
      main: '#4AA785',         // --green
    },
    warning: {
      main: '#FFC555',         // --yellow
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#1C1C1C',      // --background dark
      paper: 'rgba(255, 255, 255, 0.05)', // --light dark
    },
    text: {
      primary: '#FFFFFF',       // --foreground dark
      secondary: '#95A4FC',    // --secondary-indigo dark
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
    fontSize: 14,
    h1: { fontSize: '2rem', fontWeight: 600 },
    h2: { fontSize: '1.5rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
  shape: {
    borderRadius: 16,
  },

})

