import { Box, Typography, useTheme, TextField, InputAdornment } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getViolations } from "../../data/violationsData";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const Violations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const violationsData = getViolations();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = violationsData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "plateNo",
      headerName: "Plate Number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "owner",
      headerName: "Owner Name",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.contact}
        </Typography>
      ),
    },
    {
      field: "make",
      headerName: "Vehicle Make",
      flex: 1,
    },
    {
      field: "color",
      headerName: "Vehicle Color",
      flex: 1,
    },
    {
      field: "vehicleId",
      headerName: "Vehicle ID",
      flex: 1,
    },
    {
      field: "violationType",
      headerName: "Violation Type",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date of Violation",
      flex: 1,
    },
    {
      field: "fine",
      headerName: "Fine Amount",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.fine}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TRAFFIC VIOLATIONS" subtitle="List of Traffic Violations" />
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
          placeholder="Search Violations"
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
          checkboxSelection 
          rows={filteredData} 
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Violations;
