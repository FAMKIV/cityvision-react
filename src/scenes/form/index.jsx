import { Box, Button, TextField, Snackbar, Alert } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import { addVehicle } from "../../data/vehicleData";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFormSubmit = (values, { resetForm }) => {
    // Add the new vehicle to storage
    addVehicle(values);
    
    // Reset form and show success message
    resetForm();
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box m="20px">
      <Header title="ADD VEHICLE" subtitle="Add a New Vehicle Data" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Plate No."
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.PlateNo}
                name="PlateNo"
                error={!!touched.PlateNo && !!errors.PlateNo}
                helperText={touched.PlateNo && errors.PlateNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Make"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.VehicleMake}
                name="VehicleMake"
                error={!!touched.VehicleMake && !!errors.VehicleMake}
                helperText={touched.VehicleMake && errors.VehicleMake}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.VehicleColor}
                name="VehicleColor"
                error={!!touched.VehicleColor && !!errors.VehicleColor}
                helperText={touched.VehicleColor && errors.VehicleColor}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.VehicleModel}
                name="VehicleModel"
                error={!!touched.VehicleModel && !!errors.VehicleModel}
                helperText={touched.VehicleModel && errors.VehicleModel}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vehicle Identification Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.VehicleIdNo}
                name="VehicleIdNo"
                error={!!touched.VehicleIdNo && !!errors.VehicleIdNo}
                helperText={touched.VehicleIdNo && errors.VehicleIdNo}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Vehicle
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Vehicle data submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  PlateNo: yup.string().required("required"),
  VehicleMake: yup.string().required("required"),
  VehicleColor: yup.string().required("required"),
  VehicleModel: yup.string().required("required"),
  VehicleIdNo: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
});
const initialValues = {
  PlateNo: "",
  VehicleMake: "",
  VehicleColor: "",
  VehicleModel: "",
  VehicleIdNo: "",
  email: "",
  contact: "",
  firstName: "",
  lastName: "",
};

export default Form;
