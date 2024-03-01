import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { Box, fontSize, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import TableCoins from "../../TableCoins";
import LatestCard from "../../LatestCard";
import newsfeed from "../../../services/news.json";
import NewsFeeder from "../../newsFeeder";


function News() {
  return (
    <Box>
      <Typography> آخرین اخبار روز دنیا: </Typography>
      <NewsFeeder />
    </Box>
  );
}

export default News;
