import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { ResponsiveRadar } from "@nivo/radar";



const data = [
  {
    taste: "Bitcoin",
    دارایی: 116,
    سود: 30,
    افزایش_تا: 103,
  },
  {
    taste: "Cardano",
    دارایی: 60,
    سود: 102,
    افزایش_تا: 78,
  },
  {
    taste: "Ethereum",
    دارایی: 29,
    سود: 37,
    افزایش_تا: 39,
  },
  {
    taste: "Dodge coin",
    دارایی: 104,
    سود: 76,
    افزایش_تا: 39,
  },
  {
    taste: "Fantom",
    دارایی: 26,
    سود: 64,
    افزایش_تا: 68,
  },
];

function Wallet() {
  return (
    <Card>
      <CardContent sx={{ height: "330px" }}>
        <Box>
          <Typography>دارایی کیف شما:</Typography>
        </Box>
        <Box sx={{ height: "250px" }}>
          <ResponsiveRadar
            data={data}
            keys={["دارایی", "سود", "افزایش_تا"]}
            indexBy="taste"
            valueFormat=">-.2f"
            margin={{ top: 40, right: 40, bottom: 20, left: 40 }}
            borderColor={{ from: "color" }}
            gridLabelOffset={36}
            dotSize={7}
            dotColor={{ theme: "background" }}
            dotBorderWidth={1}
            colors={{ scheme: "spectral" }}
            blendMode="multiply"
            motionConfig="wobbly"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Wallet;
