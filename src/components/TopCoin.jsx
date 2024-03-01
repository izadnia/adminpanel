import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import market from "../services/markets.json";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

function PieCoin() {
  let label = [];
  let data = [];
  market.map((row) =>
    parseFloat(row.market_cap_rank) < 9
      ? label.push(row.id) & data.push(row.market_cap)
      : null
  );

  return (
    <Card>
      <CardContent sx={styles.chartContainer}>
        <Typography variant="h6">برترین رمزارزها :</Typography>

        <Doughnut
          data={{
            datasets: [
              {
                id: 1,
                label: "",
                data: data,
                backgroundColor: [
                  "#ea5545",
                  "#f46a9b",
                  "#ef9b20",
                  "#edbf33",
                  "#ede15b",
                  "#bdcf32",
                  "#87bc45",
                  "#27aeef",
                  "#b33dc6",
                ],
                borderColor: [
                  "#ea5545",
                  "#f46a9b",
                  "#ef9b20",
                  "#edbf33",
                  "#ede15b",
                  "#bdcf32",
                  "#87bc45",
                  "#27aeef",
                  "#b33dc6",
                ],
              },
            ],
            labels: label,
          }}
        />

        <Divider sx={styles.divider} />
        <Typography variant="h7">ارزش بازارها به تفکیک :</Typography>
        {market.map((row) =>
          parseFloat(row.market_cap_rank) < 9 ? (
            <Box key={row.id} sx={styles.coinDetail}>
              <Box variant="h7">
                <Link style={styles.link} to={`Coins/${row.id}`}>
                  <Box style={styles.img}>
                    <Box
                      component={"img"}
                      src={row.image}
                      style={{width:"30px"}}
                    ></Box>
                  </Box>
                  <Box styles={styles.id}><Typography>{row.id}</Typography></Box>
                </Link>
              </Box>
              <Typography variant="h7"> {row.market_cap} </Typography>
            </Box>
          ) : null
        )}
        
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {

  link: {
    direction:"rtl",
    display: "flex",
    textDecoration: "none",
  },
  id: {
    display:"flex",
    
  },
  img: {},
  chartContainer: {
    height: "100%",
    width: "100%",
  },
  divider: {
    mt: 2,
    mb: 2,
  },
  coinDetail: {
    display: "flex",
    justifyContent: "space-between",
    color: "neutral.normal",
    mt: 1,
  },
  rowId: {},
  rowCap: {},
};
export default PieCoin;
