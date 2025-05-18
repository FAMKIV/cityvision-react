import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
 
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I navigate through the system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Use the sidebar menu on the left to navigate between different sections. The main sections include Dashboard, Vehicles, Contacts, Violations, Form, and various charts. Click on any menu item to access that section.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add a new vehicle?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To add a new vehicle, go to the Form section from the sidebar menu. Fill in all the required fields including Plate Number, Vehicle Make, Color, Model, Vehicle ID Number, and owner contact information. Click submit to save the new vehicle entry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I view vehicle information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can view all vehicle information in the Vehicles section. The data is displayed in a table format with columns for ID, VIN, Plate Number, Make, Model, Color, and Owner information. You can sort and filter the data using the column headers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I switch between light and dark mode?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click the light/dark mode icon in the top-right corner of the screen to toggle between light and dark themes. The system will remember your preference for future visits.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do i export the data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate throw the side bar, select which data. Click on export then select which data format will be downloaded
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
