import { mockDataCars } from "./mockData";

// Initialize vehicle data in localStorage if it doesn't exist
const initializeVehicleData = () => {
  const existingData = localStorage.getItem('vehicleData');
  if (!existingData) {
    localStorage.setItem('vehicleData', JSON.stringify(mockDataCars));
  }
};

// Get all vehicles
export const getVehicles = () => {
  initializeVehicleData();
  const data = localStorage.getItem('vehicleData');
  return data ? JSON.parse(data) : mockDataCars;
};

// Add a new vehicle
export const addVehicle = (formData) => {
  const vehicles = getVehicles();
  
  const newVehicle = {
    id: vehicles.length + 1,
    vin: formData.VehicleIdNo,
    plateNo: formData.PlateNo,
    make: formData.VehicleMake,
    model: formData.VehicleModel,
    color: formData.VehicleColor,
    contact: formData.contact,
    email: formData.email,
    owner: `${formData.firstName} ${formData.lastName}`
  };

  vehicles.push(newVehicle);
  localStorage.setItem('vehicleData', JSON.stringify(vehicles));
  return newVehicle;
};

// Initialize data when the file is imported
initializeVehicleData();
