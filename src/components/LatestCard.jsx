import { Box, Card, CardContent, Checkbox, Typography } from "@mui/material";
import React from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function LatestCard() {
  return (
    <Card>
      <CardContent variant="outlined" sx={styles.cardContainer}>
        <Typography variant="h6" sx={styles.cardTitle}>
          آخرین اوضاع بیت کوین
        </Typography>
        <Box sx={styles.latestContainer}>
          <Box
            sx={styles.latestThumbnail}
            component={"img"}
            src="/assets/bitcoin.jpg"
          ></Box>
          <Typography sx={styles.latestTitle}>
            {" "}
            فروشنده ها کاهش یافته اند{" "}
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.describtion}>
          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و..
        </Typography>
        <Box sx={styles.box}>
          <Typography variant="h7"> بازدید ها:</Typography>
          <Typography variant="h7"> 2255 نفر</Typography>
        </Box>
        <Box sx={styles.box}>
          <Typography variant="h7"> استقبال:</Typography>
          <Typography variant="h7"> 735 نفر</Typography>
        </Box>
        <Box sx={styles.box}>
          <Typography variant="h7"> بازخورد ها:</Typography>
          <Typography variant="h7"> 87 نفر</Typography>
        </Box>
        <Typography sx={styles.Action} variant="link">
          ادامه مقاله
        </Typography>

        <Box sx={styles.box}>
          <Checkbox size="large" icon={<FavoriteBorder  />} checkedIcon={<Favorite sx={{color:'red'}} />} />
          <Checkbox size="large" 
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

/**@type {import("@mui/material").SxProps} */
const styles = {
  cardTitle: {
    fontFamily: "shabnam",
    mb: 3,
  },
  latestContainer: {
    width: "100%",
    position: "relative",
    mb: 1,
    display:"flex",
    justifyContent:"center"
  },
  latestThumbnail: {
    width: "300px",
    mt: 1,
    filter: "brightness(80%)",
    display: "block",
  },
  latestTitle: {
    fontFamily: "Shabnam",
    position: "absolute",
    top:130,
    color: "neutral.light",
    textAlign: "center",

  },
  describtion: {
    fontFamily: "Shabnam",
    fontSize: "0.9rem",
    mt: 1,
  },
  box: {
    fontFamily: "Shabnam",
    mt: 2,
    color: "neutral.normal",
    display: "flex",
    justifyContent: "space-between",
  },
  Action: {
    fontFamily: "Shabnam",
    mt: 2,
  },
  cardContainer: {
    width:'100%',

  },
};

export default LatestCard;
