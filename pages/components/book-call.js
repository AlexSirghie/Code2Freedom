import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#27AE60",
      contrastText: "#fff",
    },
  },
});

const BookCallButton = () => {
  return (
    // className="call-to-action-btn"
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="neutral"
        href="https://calendly.com/alex-sirghie/code2freedom_introduction-call"
        // onClick={"https://calendly.com/alex-sirghie/code2freedom_introduction-call"}
        className="call-to-action-button"
      >
        Free consultance call
      </Button>
    </ThemeProvider>
  );
};

export default BookCallButton;
