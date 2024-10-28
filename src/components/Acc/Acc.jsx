import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa6";

export default function Acc({ children, title }) {
  return (
    <Accordion style={{ backgroundColor: "#424242" }}>
      <AccordionSummary
        expandIcon={<FaChevronDown style={{ color: "#fff" }} />}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
