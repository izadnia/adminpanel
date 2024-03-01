import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import market2 from "../../../services/markets.json";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Line, LineCanvas, ResponsiveLine } from "@nivo/line";
import SingleChart from "../../SingleChart";

import { Directions } from "@mui/icons-material";

function SingleCoin() {
  const [market, setMarket] = useState(market2);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  async function fetchCoin() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5000&page=1&sparkline=true%22%20-H%20%22accept:%20application/json%22"
    );
    const data = await response.json();
    {
      loaded ? null : setMarket(data);
    }
  }

  const { id } = useParams();
  const coin = market.find((item) => item.id === id);
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    console.log("loaded : ", loaded);
    fetchCoin();
    setTimeout(() => {
      setLoaded(true);
      fetchCoin();
      console.log(market);
    }, 2000);
  }, [loaded]);

  return (
    <>
      {" "}
      {!loaded ? (
        <Box sx={{ display: "flex", margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
            }}
          >
            <CircularProgress sx={{ mt: 15, mr: 3 }} />

            <Typography sx={{ mt: 8 }}> در حال بارگذاری </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          <Card>
            <CardContent>
      
              <Box sx={styles.flex}>
                <Paper elevation={4} sx={styles.rank}>
                  رتبه {coin.market_cap_rank}# رمزارزها
                </Paper>
                <Button variant="contained" sx={styles.rank} onClick={goBack}>
                  بازگشت
                </Button>
              </Box>
              <Typography sx={{ fontSize: "0.75rem" }}>
                      پشتیبانی از سایت Coingecko:
              </Typography>
              <Grid sx={styles.flex} container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={5}>
                  <Box>
                    <Box sx={styles.info}>
                      <Box
                        sx={styles.avatar}
                        component="img"
                        src={coin.image}
                      ></Box>
                      <Typography sx={styles.id}>
                        {coin.id.toUpperCase()}
                      </Typography>
                      <Typography sx={styles.symbol}>
                        {coin.symbol.toUpperCase()}
                      </Typography>
                    </Box>
                    <Box sx={styles.price}>
                      <Typography sx={styles.current}>
                        {" "}
                        $ {coin.current_price}{" "}
                      </Typography>
                      {coin.price_change_percentage_24h < 0 ? (
                        <Typography color="red">
                          {" "}
                          {coin.price_change_percentage_24h}%{" "}
                        </Typography>
                      ) : (
                        <Typography color="#5AC409">
                          {" "}
                          {coin.price_change_percentage_24h} %
                        </Typography>
                      )}
                    </Box>
                    <Box sx={styles.tools}>
                      <Button sx={styles.toolButton} variant="outlined">
                        {" "}
                        <ShareIcon />{" "}
                      </Button>
                      <Button sx={styles.toolButton} variant="outlined">
                        {" "}
                        <NotificationsNoneIcon />{" "}
                      </Button>
                      <Button sx={styles.toolButton} variant="outlined">
                        {" "}
                        <StarOutlineIcon />{" "}
                      </Button>
                      <Typography sx={styles.watchlist}>
                        {Math.floor(Math.random() * (7600 - 1000 + 1)) + 1000} نفر در حال دنبال کردن
                      </Typography>
                    </Box>
                    <Box>
                      <Box sx={styles.detail}>
                        <Typography sx={{ fontSize: "0.85rem" }}>
                          حجم بازار
                          <HelpOutlineIcon />
                        </Typography>
                        <Typography>{coin.market_cap} </Typography>
                      </Box>
                      <Box sx={styles.detail}>
                        <Typography sx={{ fontSize: "0.85rem" }}>
                          تغییرات در 24 ساعت
                          <HelpOutlineIcon />
                        </Typography>
                        <Typography>
                          {parseFloat(coin.price_change_24h).toFixed(3)}{" "}
                        </Typography>
                      </Box>
                      <Box sx={styles.detail}>
                        <Typography sx={{ fontSize: "0.85rem" }}>
                          تغییرات بازار در 24 ساعت
                          <HelpOutlineIcon />
                        </Typography>
                        <Typography>
                          {coin.market_cap_change_percentage_24h}{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid  item xs={12} sm={12} md={12} lg={7}>
                  <Box>
                    <SingleChart id={coin.id} />
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "350px",
                      p: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Typography>جزئیات</Typography>
                    <Typography sx={{ fontSize: "0.75rem" }}>
                      نوسانات اخیر این رمزارز
                    </Typography>
                    <Box sx={{ width: "100%", height: "97%" }}>
                      <Box>
                        <Box sx={styles.detail}>
                          <Typography sx={{ fontSize: "0.85rem" }}>
                            Max عرضه
                            <HelpOutlineIcon />
                          </Typography>
                          <Typography>{coin.max_supply} </Typography>
                        </Box>
                        <Box sx={styles.detail}>
                          <Typography sx={{ fontSize: "0.85rem" }}>
                            عرضه کل
                            <HelpOutlineIcon />
                          </Typography>
                          <Typography>{coin.total_supply} </Typography>
                        </Box>
                        <Box sx={styles.detail}>
                          <Typography sx={{ fontSize: "0.85rem" }}>
                            سکه در گردش
                            <HelpOutlineIcon />
                          </Typography>
                          <Typography>{coin.circulating_supply} </Typography>
                        </Box>
                        <Box sx={styles.detail}>
                          <Typography sx={{ fontSize: "0.85rem" }}>
                            بازار رقیق شده
                            <HelpOutlineIcon />
                          </Typography>
                          <Typography>
                            {coin.fully_diluted_valuation}{" "}
                          </Typography>
                        </Box>
                        <Box sx={styles.detail}>
                          <Typography sx={{ fontSize: "0.85rem" }}>
                            آخرین به روز رسانی
                            <HelpOutlineIcon />
                          </Typography>
                          <Typography>
                            {coin.last_updated.slice(11 | undefined, 19)}{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  rank: {
    height: "",
    p: 1,
    mb: 2,
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  info: {
    display: "flex",
  },
  avatar: {
    width: "40px",
    height: "40px",
  },
  id: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    m: 1,
    ml: 2,
  },
  symbol: {
    fontSize: "1rem",
    mt: 1,
  },
  price: {
    display: "flex",
  },
  current: {
    ml: 2,
    color:'blueviolet'
  },
  tools: {
    mt: 2,
    p: 1,
    display: "flex",
  },
  toolButton: {
    ml: 0.5,
    p: 0.85,
    color: "grey",
    border: "1px solid lightgrey",
    borderRadius: "10px",
  },
  watchlist: {
    fontSize: "0.75rem",
    height: "",
    background: "#F1F1ED",
    p: 0.5,
    border: "1px solid lightgrey",
    borderRadius: "10px",
  },
  detail: {
    width: "100%",
    // maxWidth: "400px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid lightgrey",
    p: 1,
  },
};

export default SingleCoin;
