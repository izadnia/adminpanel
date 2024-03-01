import{CssBaseline, ThemeProvider, Typography} from '@mui/material'
import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './components/config/theme';
import { Box } from '@mui/material'; 
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';


function App() {

  return (
  <React.Fragment>
    <ThemeProvider  theme={theme}>
      <ProSidebarProvider>
        <CssBaseline />
        <AppHeader />
        <Box sx={styles.container}>
          <BrowserRouter>
            <SideNav/>
            <Box components={'main'} sx={styles.mainSection} >
              <AppRoutes/>
            </Box >
          </BrowserRouter>
        </Box>
      </ProSidebarProvider>
    </ThemeProvider>
  </React.Fragment>
  )
}

/**@type {import("@mui/material").SxProps} */
const styles = {
  container:{
    display:'flex',
    bgcolor:'neutral.light',
    height: 'calc(90%)',

  },
  mainSection:{
    p: 2,
    width:'100%',
    height:'100%',
    overflow:'auto'
  },
}


export default App
