import { Box } from "@mui/material";
import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    editable: true,
  },
  {
    field: "currency",
    headerName: "Currency",
    flex: 1,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 0.3,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    editable: true,
  },
];

const rows = [
  { id: 1, date: "2000/10/25", currency: "BTC", amount: 35, price: 16000 },
  { id: 2, date: "2000/10/25", currency: "BTC", amount: 42, price: 16000 },
  { id: 3, date: "2000/10/25", currency: "ETH", amount: 45, price: 1400 },
  { id: 4, date: "2000/10/25", currency: "BTC", amount: 16, price: 16000 },
  { id: 5, date: "2000/10/25", currency: "ETH", amount: 35, price: 1400 },
  { id: 6, date: "2000/10/25", currency: "ETH", amount: 150, price: 1400 },
  { id: 7, date: "2000/10/25", currency: "BTC", amount: 44, price: 16000 },
  { id: 8, date: "2000/10/25", currency: "BTC", amount: 36, price: 16000 },
  { id: 9, date: "2000/10/25", currency: "ETH", amount: 65, price: 1400 },
];

const HistoryGrid = () => {
  return (
    <Box sx={{ height: 200, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        rowHeight={32}
        disableSelectionOnClick
        checkboxSelection={false}
        headerHeight={32}
        hideFooterSelectedRowCount
      />
    </Box>
  );
};

export default HistoryGrid;
