import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  Fab,
  Typography,
} from "@mui/material";
import { Box, color, palette } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function Calendarfa() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" >
          تقویم
        </Typography>
        <Box sx={styles.calendar}>
          <Calendar 
            calendar={persian} 
            locale={persian_fa}
            shadow={false}
            />
        </Box>
        <Divider />
        <Box sx={styles.reminder}>
          <Typography>یادآوری</Typography>
          <Box sx={styles.box}>
            <Typography sx={styles.item}> تماس با صرافی سعادت آباد</Typography>
            <Checkbox defaultChecked size="medium" />
          </Box>
          <Box sx={styles.box}>
            <Typography sx={styles.item}> تبدیل ارز به رمز ارز</Typography>
            <Checkbox size="medium" />
          </Box>{" "}
          <Box sx={styles.box}>
            <Typography sx={styles.item}> افتتاح حساب در بانک </Typography>
            <Checkbox size="medium" />
          </Box>
          <Fab size="small" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </CardContent>
    </Card>
  );
}

/**@type {import("@mui/material").SxProps}*/
const styles = {
  calendar: {
    display:"flex",
    justifyContent:"center",
    fontFamily: "Shabnam",
    width:'100%',
    mt:2,
    mb: 2,
  },
  reminder: {

  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    mb: 1,
  },
  item: {
    fontFamily: "Shabnam",
    fontSize: "0.8rem",
    lineHeight: "3",
  },
};

export default Calendarfa;
