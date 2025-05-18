import { Box, Typography, useTheme, TextField, InputAdornment } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { getVehicles } from "../../data/vehicleData";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';

const Vehicles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [vehicleData, setVehicleData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load vehicle data when component mounts
    setVehicleData(getVehicles());
  }, []);

  const filteredData = vehicleData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "vin",
      headerName: "VIN",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "plateNo",
      headerName: "Plate No.",
      flex: 1,
    },
    {
      field: "make",
      headerName: "Make",
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      flex: 1,
    },
    {
      field: "color",
      headerName: "Color",
      flex: 1,
    },
    {
      field: "owner",
      headerName: "Vehicle Owner",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="VEHICLES" subtitle="Managing the Vehicle Information" />
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
          placeholder="Search Vehicles"
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
        }}
      >
        <DataGrid checkboxSelection rows={filteredData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Vehicles;
