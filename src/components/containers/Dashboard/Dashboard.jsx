import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LatestCard from "../../LatestCard";
import Markets from "../../Markets";
import TopCoin from "../../TopCoin";
import Calendarfa from "../../Calendarfa";
import Wallet from "../../Wallet";
import LineChart from "../../LineChart";



function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        پنل رمز ارز
      </Typography>

      <Grid container spacing={2}>
        
        <Grid item xs={12} md={4} >
          <Wallet/>
        </Grid>
        <Grid item xs={12} md={8} >
          <LineChart />
        </Grid>

        <Grid item xs={12} md={4} >
          <TopCoin/><Markets />
        </Grid>
        <Grid item xs={12} md={4} >
          <Calendarfa />
        </Grid>
        <Grid item xs={12} md={4} >
          <LatestCard />
        </Grid>
      </Grid>



      
      {/* <Box sx={styles.columnContainer}>
        <Box sx={styles.topCoin}>
          <TopCoin /><Divider/><Markets />
        </Box>
        <Box>
          <Wallet/>
        </Box>




        <Box>
          <Box sx={styles.calender}>
            <Calendarfa />
          </Box>
          <Box sx={styles.lastNews}>
            <LatestCard />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}

/**@type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
    fontFamily: "Shabnam",
  },
  topCoin: {
    mb: 1,
  },
  lastNews: {
    mt: 1,
    mb: 1,
  },
  columnContainer: {
    columns: "280px ",
    height: "100%",
    maxWidth: 1400,
    mt: 1,
    mb: 1,
  },
  calender: {
    mb: 1,
    mt: 1,
  },

};
export default Dashboard;
