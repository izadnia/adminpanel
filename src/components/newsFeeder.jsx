import {
  Button,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import newsfeed from "../services/news.json";

function NewsFeeder() {
  const [loaded, setLoaded] = useState(false);

  // const [news, setNews] = useState([]);

  // api from newsapi.org
  // 95fb7f2dbab24e28b1e5fb3ed7b6e067
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95fb7f2dbab24e28b1e5fb3ed7b6e067

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95fb7f2dbab24e28b1e5fb3ed7b6e067"
  //   );
  //   const data = await response.json();
  //   return setNews(data.articles);
  // };

  useEffect(() => {
    console.log("loaded : ", loaded);
    // fetchData();
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, [loaded]);

  return (
    <Box>
      <Divider sx={{ mt: 2 }}>
        <Button
          onClick={() => {
            setLoaded(false);
          }}
          sx={{ backgroundColor: "grey" }}
          variant="contained"
        >
          به روز رسانی
        </Button>
      </Divider>
      {!loaded ? <LinearProgress sx={styles.loader} /> : null}
      <Grid sx={{ mt: 2 }} container>
        {newsfeed.articles.map((data) => (
          <Grid
            key={data.title}
            elevation={8}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <Paper sx={styles.card}>
              <Box sx={styles.general}>
                <Box sx={styles.flex}>
                  <Box sx={styles.source}>{data.source.name}:</Box>
                  <Box sx={styles.time}>{data.publishedAt.split("T", 1)}</Box>
                </Box>
                <Box sx={styles.thumbnail}>
                  <Box
                    sx={styles.imagefeed}
                    component="img"
                    src={data.urlToImage}
                  ></Box>
                  <Typography sx={styles.title}>
                    {data.title.split(" - ", 1)}
                  </Typography>
                </Box>

                <Typography sx={styles.description}>{data.description}</Typography>
                {data.author != null ? (
                  <Typography sx={styles.author}> by: {data.author}</Typography>
                ) : null}
                <Button sx={styles.button} variant="contained" href={data.url}>
                  read more ...
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  loader: {
    mt: 2,
  },
  card: {
    p: 1,
    borderRadius: "5px",
    m: 1,
  },
  general: {
    height: "500px",
    direction: "ltr",
    m: 1,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
  },
  source: {
    fontSize: "0.75rem",
  },
  time: {
    fontFamily: "arial",
    fontSize: "0.75rem",
  },
  thumbnail: {
    position: "relative",
    mt: 2,
  },
  imagefeed: {
    width: "100%",
    height: "150px",
    background: "black",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    filter: "brightness(40%)",
  },
  title: {
    fontFamily: "arial",
    position: "absolute",
    fontSize: "0.8rem",
    color: "neutral.light",
    textAlign: "left",
    textShadow: "2px 2px 1px black",
    p: 2,
    top: 0,
  },
  author: {
    fontSize: "0.8rem",
    overflow: "clip",
    color: "grey",
    mb: 1,
    mt: 1,
  },
  description: {
    fontFamily: "arial",
    fontStyle: "italic",
    overflow: "clip",
  },
  button: {
    mt: 2,
  },
};

export default NewsFeeder;
