import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { fontStyle } from "@mui/system";

function renderImage(params) {
  return (
    <Box
      component={"img"}
      style={{ width: "35px" }}
      src={params.value}
      alt="id"
    ></Box>
  );
}
function renderButton(params) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/Coins/${params.value}`}>
      <Button variant="outlined">
        <Box>{params.value}</Box>
      </Button>
    </Link>
  );
}
const columns = [
  {
    field: "image",
    renderCell: renderImage,
    headerName: "تصویر",
    width: 70,
  },
  { field: "market_cap_rank", headerName: "رنک", width: 50 },

  { field: "id", renderCell: renderButton, headerName: "ID", width: 170 },

  // { field: "symbol", headerName: "نماد", width: 70 },
  { field: "name", headerName: "نام", width: 140 },
  { field: "current_price", headerName: "ارزش", width: 100 },
  // {
  //   field: "price_change_24h",
  //   headerName: "تغییرات ",
  //   width: 200,
  // },
  {
    field: "price_change_percentage_24h",
    headerName: "تغییرات (درصد)",
    width: 110,
  },
  { field: "market_cap", headerName: "ارزش بازار", width: 120 },
  {
    field: "fully_diluted_valuation",
    headerName: "حجم بازار رقیق شده",
    width: 140,
  },
  // {
  //   field: "market_cap_change_24h",
  //   headerName: "تغییرات بزرگی بازار",
  //   width: 150,
  // },
  {
    field: "market_cap_change_percentage_24h",
    headerName: "درصد بازار",
    width: 100,
  },
  {
    field: "circulating_supply",
    headerName: "سکه در گردش",
    width: 150,
  },
  // { field: "total_supply", headerName: "عرضه کل", width: 150 },
  // { field: "max_supply", headerName: "بیشترین عرضه", width: 150 },
  // { field: "ath", headerName: "Auth", width: 100 },
  // {
  //   field: "ath_change_percentage",
  //   headerName: "Auth\u00a0Change\u00a0Percentage",
  //   width: 180,
  // },
  // { field: "ath_date", headerName: "Auth\u00a0Date", width: 150 },
  // {
  //   field: "atl_change_percentage",
  //   headerName: "Atl\u00a0درصد",
  //   width: 130,
  // },
  // { field: "atl_date", headerName: "Atl\u00a0زمان", width: 200 },
  {
    field: "last_updated",
    headerName: "آخرین به روز رسانی",
    width: 200,
  },
];
const localizedTextsMap = {
  // Root
  noRowsLabel: "در حال بارگزاری",
  noResultsOverlayLabel: "یافت نشد",
  errorOverlayDefaultLabel: "خطا رخ داده است",
  // سلکتور گرفتن خروجی از جدول
  toolbarExportLabel: "خروجی",
  toolbarExport: "تهیه نسخه",
  toolbarExportCSV: "CSV",
  toolbarExportPrint: "پرینت",
  // میزان ضخامت سطر ها
  toolbarDensity: "ضخامت",
  toolbarDensityLabel: "ضخامت",
  toolbarDensityCompact: "فشرده",
  toolbarDensityStandard: "معمولی",
  toolbarDensityComfortable: "باز",
  // جست و جو سریع
  toolbarQuickFilterPlaceholder: "جست و جو ..",
  toolbarQuickFilterLabel: "جست و جو",
  toolbarQuickFilterDeleteIconLabel: "پاک کردن",
  //ستون ها
  columnsPanelTextFieldLabel: "جستار در ستون ها",
  columnsPanelTextFieldPlaceholder: "نام ستون مورد نظر",
  columnsPanelDragIconLabel: "مرتب سازی مجدد",
  columnsPanelShowAllButton: "نشان دادن همه",
  columnsPanelHideAllButton: "پنهان کردن همه",
  // Columns selector toolbar button text
  toolbarColumns: "ستون ها",
  toolbarColumnsLabel: "انتخاب ستون ها",
  // Rows selected footer text
  footerRowSelected: (count) => `${count.toLocaleString()} :تعداد ستون انتخابی`,
};
function TableCoins() {
  const [loaded, setLoaded] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [market, setMarket] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5000&page=1&sparkline=true%22%20-H%20%22accept:%20application/json%22"
    );
    const data = await response.json();
    return setMarket(data);
  };

  useEffect(() => {
    console.log("loaded : ", loaded);
    fetchData();
    setTimeout(() => {
      setLoaded(true);
      fetchData();
    }, 2000);
  }, [loaded]);

  return (
    <Box sx={styles.box}>
      <Button
        color="success"
        variant="contained"
        sx={styles.update}
        onClick={() => {
          setLoaded(false);
        }}
      >
        <Typography> به روز رسانی </Typography>
      </Button>

      <Box sx={styles.table}>
        {!loaded ? <LinearProgress sx={styles.loader} /> : null}
        <DataGrid
          stickyHeader={true}
          headerFixed={true}
          localeText={localizedTextsMap}
          components={{ Toolbar: GridToolbar }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          density="standard"
          componentsProps={{
            toolbar: {
              showQuickFilter: false,
              quickFilterProps: {
                fontFamily: "tahoma",
                debounceMs: 500,
              },
            },
          }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 50, 100]}
          rows={!loaded ? {} : market}
          columns={columns}
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
}
/**@type {import("@mui/material").SxProps} */
const styles = {
  box: {
    height: "100%",
  },
  update: {
    mt: 2,
  },
  table: {
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    mt: 2,
    direction: "ltr",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default TableCoins;
