import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Markets from "./Markets";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";

const data = [
  {
    id: "Bitcoin",
    color: "hsl(200, 70%, 50%)",
    data: [
      {
        x: "فروردین",
        y: 104,
      },
      {
        x: "اردیبهشت",
        y: 98,
      },
      {
        x: "خرداد",
        y: 24,
      },
      {
        x: "تیر",
        y: 271,
      },
      {
        x: "مرداد",
        y: 71,
      },
      {
        x: "شهریور",
        y: 237,
      },
      {
        x: "مهر",
        y: 42,
      },
      {
        x: "آبان",
        y: 285,
      },
      {
        x: "آذر",
        y: 36,
      },
      {
        x: "دی",
        y: 12,
      },
      {
        x: "بهمن",
        y: 244,
      },
      {
        x: "اسفند",
        y: 128,
      },
    ],
  },
  {
    id: "Cardano",
    color: "hsl(159, 70%, 50%)",
    data: [
      {
        x: "فروردین",
        y: 106,
      },
      {
        x: "اردیبهشت",
        y: 229,
      },
      {
        x: "خرداد",
        y: 242,
      },
      {
        x: "تیر",
        y: 279,
      },
      {
        x: "مرداد",
        y: 114,
      },
      {
        x: "شهریور",
        y: 34,
      },
      {
        x: "مهر",
        y: 252,
      },
      {
        x: "آبان",
        y: 108,
      },
      {
        x: "آذر",
        y: 147,
      },
      {
        x: "دی",
        y: 154,
      },
      {
        x: "بهمن",
        y: 274,
      },
      {
        x: "اسفند",
        y: 17,
      },
    ],
  },
  {
    id: "Ethereum",
    color: "hsl(346, 70%, 50%)",
    data: [
      {
        x: "فروردین",
        y: 70,
      },
      {
        x: "اردیبهشت",
        y: 113,
      },
      {
        x: "خرداد",
        y: 225,
      },
      {
        x: "تیر",
        y: 129,
      },
      {
        x: "مرداد",
        y: 110,
      },
      {
        x: "شهریور",
        y: 184,
      },
      {
        x: "مهر",
        y: 176,
      },
      {
        x: "آبان",
        y: 181,
      },
      {
        x: "آذر",
        y: 132,
      },
      {
        x: "دی",
        y: 107,
      },
      {
        x: "بهمن",
        y: 117,
      },
      {
        x: "اسفند",
        y: 212,
      },
    ],
  },
  {
    id: "Ripple",
    color: "hsl(328, 70%, 50%)",
    data: [
      {
        x: "فروردین",
        y: 154,
      },
      {
        x: "اردیبهشت",
        y: 23,
      },
      {
        x: "خرداد",
        y: 169,
      },
      {
        x: "تیر",
        y: 212,
      },
      {
        x: "مرداد",
        y: 298,
      },
      {
        x: "شهریور",
        y: 130,
      },
      {
        x: "مهر",
        y: 140,
      },
      {
        x: "آبان",
        y: 138,
      },
      {
        x: "آذر",
        y: 268,
      },
      {
        x: "دی",
        y: 159,
      },
      {
        x: "بهمن",
        y: 209,
      },
      {
        x: "اسفند",
        y: 158,
      },
    ],
  },
  {
    id: "Dodgecoin",
    color: "hsl(69, 70%, 50%)",
    data: [
      {
        x: "فروردین",
        y: 6,
      },
      {
        x: "اردیبهشت",
        y: 259,
      },
      {
        x: "خرداد",
        y: 241,
      },
      {
        x: "تیر",
        y: 113,
      },
      {
        x: "مرداد",
        y: 148,
      },
      {
        x: "شهریور",
        y: 109,
      },
      {
        x: "مهر",
        y: 297,
      },
      {
        x: "آبان",
        y: 54,
      },
      {
        x: "آذر",
        y: 14,
      },
      {
        x: "دی",
        y: 154,
      },
      {
        x: "بهمن",
        y: 290,
      },
      {
        x: "اسفند",
        y: 249,
      },
    ],
  },
];

function LineChart() {
  const data2 = [];

  return (
    <Card>
      <CardContent sx={{height:'330px'}}>
        <Typography>موجودی کیف پول شما در سال 1401:</Typography>
        <Box sx={{ height: "270px" }}>
          
        <ResponsiveLine
          data={data}
          style={{fontFamily:'Shabnam'}}
          margin={{ top:10, right: 90, bottom: 40, left: 40 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 1,
            tickPadding: 35,
            tickRotation: -90,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle",
            fontFamily:'Shabnam',
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 22,
            tickRotation: 0,
            legend: "",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={5}
          pointColor={{ theme: "background" }}
          pointBorderWidth={1}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-1}
          useMesh={true}
          legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: true,
                translateX: 30,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 20,
                itemHeight: 30,
                itemOpacity: 1.75,
                symbolSize: 15,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',

            }
        ]}


        
        />
        </Box>
      </CardContent>
    </Card>
  );
}

export default LineChart;
