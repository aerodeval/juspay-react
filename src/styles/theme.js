import { createTheme } from '@mui/material/styles'


//Custom theme for application to use in MUI

const theme = createTheme({
    palette: {
      primary: {
        main: '#1C1C1C', 
      },
      secondary: {
        main: '#A8C5DA',
      },
    },
    typography: {
      fontFamily: 'var(--font-sans), Arial, sans-serif',
    },
  })

export default theme
