import { getVehicles } from "./vehicleData";

// Initialize violations data in localStorage if it doesn't exist
const initializeViolationsData = () => {
  const existingData = localStorage.getItem('violationsData');
  if (!existingData) {
    const vehicles = getVehicles();
    const mockViolations = [
      {
        id: 1,
        plateNo: "ABC123",
        make: "Toyota",
        color: "Black",
        vehicleId: "VIN123456",
        violationType: "Speeding",
        date: "2024-03-15",
        fine: 150
      },
      {
        id: 2,
        plateNo: "XYZ789",
        make: "Honda",
        color: "White",
        vehicleId: "VIN789012",
        violationType: "Parking Violation",
        date: "2024-03-14",
        fine: 75
      }
    ];
    localStorage.setItem('violationsData', JSON.stringify(mockViolations));
  }
};

// Get all violations with owner information
export const getViolations = () => {
  initializeViolationsData();
  const data = localStorage.getItem('violationsData');
  const violations = data ? JSON.parse(data) : [];
  const vehicles = getVehicles();

  // Add owner information from vehicle data
  return violations.map(violation => {
    const vehicle = vehicles.find(v => v.plateNo === violation.plateNo);
    return {
      ...violation,
      owner: vehicle ? vehicle.owner : 'Unknown',
      contact: vehicle ? vehicle.contact : 'N/A'
    };
  });
};

// Add a new violation
export const addViolation = (violationData) => {
  const violations = getViolations();
  const vehicles = getVehicles();
  const vehicle = vehicles.find(v => v.plateNo === violationData.plateNo);
  
  const newViolation = {
    id: violations.length + 1,
    plateNo: violationData.plateNo,
    make: violationData.make,
    color: violationData.color,
    vehicleId: violationData.vehicleId,
    violationType: violationData.violationType,
    date: violationData.date,
    fine: violationData.fine
  };

  violations.push(newViolation);
  localStorage.setItem('violationsData', JSON.stringify(violations));
  return newViolation;
};

// Initialize data when the file is imported
initializeViolationsData(); 