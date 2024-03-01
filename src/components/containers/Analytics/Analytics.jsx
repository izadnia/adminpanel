import { Box, Typography } from "@mui/material";
import React from "react";
import TableCoins from "../../TableCoins";


function Analytics() {
  return (
    <Box sx={styles.box}>
      <Typography variant="h6" >اطلاعات رمزارز ها در 24ساعت گذشته</Typography>
      <TableCoins/>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  box: {
    height:'80%',
    padding:'0',
    margin:0,
    m:1,

  },


};

export default Analytics;
