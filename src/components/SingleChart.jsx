import React, { useCallback, useEffect, useState } from "react";
import { ResponsiveLine, ResponsiveLineCanvas } from "@nivo/line";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import { padding } from "@mui/system";

// import historyCOIN from "../services/historyCOIN.json";
import { toDateObject } from "react-multi-date-picker";

HTMLCanvasElement.prototype.getBBox = function () {
  return { width: this.offsetWidth, height: this.offsetHeight };
};

function SingleChart(coin) {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [historyCOIN, setHistoryCOIN] = useState([]);
  const [up, setUp] = useState();
  const [down, setDwon] = useState();

  const fetchData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=7`
    );
    const data = await response.json();

    {
      loaded ? null : setHistoryCOIN(data);
    }
  };

  let price = [{ id: "نرخ سکه در گذر زمان", data: [] }];
  function classifier() {
    let i = 0;
    let bigNum = 0;
    let smallNum = parseFloat(historyCOIN.prices[0][1]);
    while (i < historyCOIN.prices.length) {
      const unixTime = historyCOIN.prices[i][0];
      const dateObj = new Date(unixTime);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
      const day = String(dateObj.getDate()).padStart(2, "0");
      const hours = String(dateObj.getHours()).padStart(2, "0");
      const minutes = String(dateObj.getMinutes()).padStart(2, "0");
      const seconds = String(dateObj.getSeconds()).padStart(2, "0");
      const milliseconds = String(dateObj.getMilliseconds()).padStart(3, "0");
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
      let newData = {
        x: formattedDate,
        y: historyCOIN.prices[i][1],
      };
      {
        parseFloat(historyCOIN.prices[i][1]) > bigNum
          ? (bigNum = historyCOIN.prices[i][1])
          : null;
      }
      {
        parseFloat(historyCOIN.prices[i][1]) < smallNum
          ? (smallNum = historyCOIN.prices[i][1])
          : null;
      }
      price[0].data.push(newData);
      i++;
    }
    setUp(parseFloat(bigNum));
    setDwon(parseFloat(smallNum));
    setLoaded(true);
    console.log(loaded);
  }

  useEffect(() => {
    console.log("loaded : ", loaded);
    setTimeout(() => {
      fetchData();
      classifier();
      setData(price);
    }, 100);
  }, [historyCOIN, loaded]);

  return (
    <Card>
      <CardContent className="chart" sx={styles.SingleChart}>
        {loaded ? (
          ///////////// نمودار نواسانات رمز ارز ///////////////
          <ResponsiveLineCanvas
            /////// منبع اطلاعات رمزارز ///////
            data={data}
            /////// میزان حاشیه اطراف ////////
            margin={{ top: 20, right: 10, bottom: 35, left: 60 }}
            //-----------بردار ها ----------//
            /////// مشخصات بردار افقی ///////
            xScale={{
              // نوع محور = زمان
              type: "time",
              // فرمت قراردادی محور افقی : سال-ماه-روز   ساعت-دقیقه-ثانیه-میلی ثانیه
              format: "%Y-%m-%d %H:%M:%S.%L",
              useUTC: true,
            }}
            /////// مشخصات بردار عمودی //////
            yScale={{
              // نوع محور = خطی
              type: "linear",
              // :دو مقدار زیر کمترین و بیشترین مقدار از فانکشن کلاسیفای محاسبه می شود
              // بیشترین مقدار
              max: up,
              // کمترین مقدار
              min: down,
            }}
            //----------- محور ها ----------//
            /////// مشخصات محور سمت چپ //////
            axisLeft={{
              // جهت گیری
              orient: "left",

              //// مقادیر ////
              // اندازه نشانه
              tickSize: 0,
              // میزان لایه داخلی
              tickPadding: 10,
              // زاویه مقادیر از افق
              tickRotation: -45,

              //// برچسب ////
              //برچسب محور
              legend: "P R I C E  - $",
              // فاصله برچسب از محور
              legendOffset: -45,
              // جایگاه برچسب : چپ/وسط/راست
              legendPosition: "middle",
            }}
            /////// محور پایین ///////
            axisBottom={{
              // انتخاب فرمت : %B=ماه, %D=روز , %Y=سال
              format: "%b %d",
              // جهت گیری
              orient: "bottom",
              // اندازه نشانه
              tickSize: 0,
              // میزان لایه داخلی
              tickPadding: 5,
              // زاویه از افق
              tickRotation: -45,
              // فاصله از محور
              legendOffset: -2,
              // جایگاه برچسب : چپ/وسط/راست
              legendPosition: "middle",
            }}
            /////// نحوه نمایش زمان در هنگام هاور موس روی نمودار ///////
            xFormat="time:%Y-%m-%d  %H:%M:%S.%L"
            /////// :نحوه نمایش نقاط روی نمودار
            //اندازه نقاط
            pointSize={1}
            // میزان ضخامت حاشیه نقاط
            pointBorderWidth={1}
            // رنگ نقاط
            pointBorderColor={{
              from: "color",
              modifiers: [["darker", 0.7]],
            }}
            /////// رنگ نمودر
            colors={{ scheme: "category10" }}
            ///////برچسب توضیحات نمودار
            legends={[
              {
                anchor: "top-left",
                direction: "row",
                fontFamily: "Shabnam",
                justify: false,
                translateX: 0,
                translateY: -25,
                itemsSpacing: 0,
                itemDirection: "right-to-left",
                itemWidth: 90,
                itemHeight: 30,
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
              },
            ]}
          />
        ) : (
          /////////////// بارگذاری صفحه //////////////////
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
        )}
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  SingleChart: {
    height: "300px",
    padding: 0.5,
  },
};

export default SingleChart;
