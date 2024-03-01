import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from 'react-pro-sidebar';

function AppHeader() {
    const { collapseSidebar, toggleSidebar, broken} = useProSidebar();

  return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={()=> broken ? toggleSidebar() : collapseSidebar() } color="secondary">
                    <MenuTwoToneIcon />
                </IconButton>

                <Box component='img' sx={styles.appLogo} src="./assets/logo.png" />
                <Box sx={{flexGrow:1}} />

                <IconButton title='پیام ها' color='secondary'>
                    <Badge badgeContent={14} color="error">
                        <NotificationsIcon />            
                    </Badge>   
                </IconButton>
                
                <IconButton title='تنظیمات' color='secondary'>
                    <SettingsIcon/>
                </IconButton>

                <IconButton title='خروج' color='secondary'>
                    <LogoutIcon/>
                </IconButton>


            </Toolbar>
        </AppBar>
    )
}


/**@type {import("@mui/material").SxProps} */
const styles = {
    appBar:{
        bgcolor:'neutral.main',
    },
    appLogo:{
        borderRadius: 2,
        width:70,
        ml: 2,
        mr:2,
        cursor:'pointer',
        
    }
}




export default AppHeader