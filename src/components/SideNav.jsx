import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StyleIcon from "@mui/icons-material/Style";
import SourceIcon from "@mui/icons-material/Source";
import AddchartIcon from "@mui/icons-material/Addchart";
import { Avatar, Divider, Switch, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const Location = useLocation();

  return (
    <Sidebar
      defaultCollapsed='true'
      rtl={true}
      style={{ height: "100%", top: "auto" }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.menu}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Channel Name"
          src='./assets/avatar/avatar.jpg'
        />
        {!collapsed ? (
          <Typography variant="body2" sx={styles.yourProfile}>
            خوش آمدید
          </Typography>
        ) : null}
        {!collapsed ? (
          <Typography variant="overline" sx={styles.user}>
            کاربر 
          </Typography>
        ) : null}
      </Box>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.neutral.medium
                : undefined,
            };
          },
        }}
      >
        <MenuItem
          active={location.pathname === '/'}
          component={<Link to='/' />}
          icon={<DashboardOutlinedIcon />}
        >
          <Typography variant="body2" sx={styles.mItem}>
            خانه
          </Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/Analytics'}
          component={<Link to='/Analytics' />}
          icon={<SourceIcon />}
        >
          <Typography variant="body2" sx={styles.mItem}>
            اطلاعات{" "}
          </Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/News'}
          component={<Link to='/News' />}
          icon={<StyleIcon />}
        >
          <Typography variant="body2" sx={styles.mItem}>
            اخبار
          </Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/Customization'}
          component={<Link to='/Customization' />}
          icon={<AddchartIcon />}
        >
          <Typography variant="body2" sx={styles.mItem}>
            شخصی سازی
          </Typography>
        </MenuItem>
        <Divider />





      </Menu>


      {/* <Box sx={styles.avatarContainer}>
      {!collapsed ? (
        <Avatar
          sx={styles.global}
          alt="img"
          src="src/assets/global.png"
      />
      ) : null}
      </Box> */}
      
    </Sidebar>
  );
}

/**@type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  theme:{
    display:"flex"
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourProfile: {
    mt: 1,
    fontFamily: "Shabnam",
  },
  mItem: {
    fontFamily: "Shabnam",
  },
  user: {
    fontFamily: "Shabnam",
  },
  global: {
    width: "60%",
    height: "auto",
    filter: "brightness(85%)",
  },
};

export default SideNav;
