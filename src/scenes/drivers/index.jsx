import { Box, Typography, useTheme, TextField, InputAdornment } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getVehicles } from "../../data/vehicleData";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const vehicleData = getVehicles();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = vehicleData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "owner",
      headerName: "Owner Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contact",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.contact || 'N/A'}
        </Typography>
      ),
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "plateNo", headerName: "Plate Number", flex: 1 },
    { field: "make", headerName: "Vehicle Make", flex: 1 },
    { field: "model", headerName: "Vehicle Model", flex: 1 },
    { field: "color", headerName: "Vehicle Color", flex: 1 },
    { field: "vin", headerName: "Vehicle ID No.", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header
        title="TRAFFIC MANAGEMENT"
        subtitle="List of Vehicle Owners and Details"
      />
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "flex-end",
          "& .MuiTextField-root": {
            width: "100%",
            maxWidth: "500px",
          },
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Contacts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: colors.grey[400] }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: colors.primary[400],
              transition: "all 0.3s ease",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: colors.greenAccent[500],
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.greenAccent[500],
                borderWidth: "1px",
              },
            },
            "& .MuiInputBase-input": {
              color: colors.grey[100],
              padding: "12px 14px",
              "&::placeholder": {
                color: colors.grey[400],
                opacity: 1,
              },
            },
          }}
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={filteredData}
          columns={columns}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Contacts;
