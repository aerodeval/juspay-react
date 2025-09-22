import { createTheme } from '@mui/material/styles'

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F7F9FB',
    },
    secondary: {
      main: '#A8C5DA',
    },
    info: {
      main: '#E3F5FF',
    },
    success: {
      main: '#4AA785',
    },
    warning: {
      main: '#FFC555',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#ffffff',
      paper: '#F7F9FB',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#8A8CD9',
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
          backgroundColor: '#F7F9FB',
          borderRadius: 16,
          padding: 24,
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 400,
            fontSize: 12,
            color: '#9FA0A2',
          },
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
      main: '#C6C7F8',
    },
    secondary: {
      main: '#95A4FC',
    },
    info: {
      main: '#E3F5FF',
    },
    success: {
      main: '#4AA785',
    },
    warning: {
      main: '#FFC555',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#1C1C1C',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#95A4FC',
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
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#282828',
          borderRadius: 16,
          padding: 24,
          boxShadow: 'none',
          border: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: 400,
            fontSize: 12,
            color: '#9FA0A2',
          },
        },
      },
    },
  },


})

