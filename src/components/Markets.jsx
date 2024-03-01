import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Markets() {
  return (
    <Card>
      <CardContent variant="outlined">
        <Typography variant="h7" sx={styles.title}>آخرین تحولات بازار:</Typography>

        <Box sx={styles.box} >
          <Typography>حجم کلی مبادلات:</Typography>
          <Typography> 25145487 </Typography>
        </Box>
        <Box sx={styles.box} >
          <Typography> افت شاخص ها </Typography>
          <Typography> 2487 </Typography>
        </Box>
        <Box sx={styles.box} >
          <Typography> تعداد فروش ها </Typography>
          <Typography> 145487 </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    title:{
        fontFamily:'shabnam',
    },
  box: {
    display: "flex",
    justifyContent: "space-between",
    
    mt:1,
  },
};

export default Markets;
