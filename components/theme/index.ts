import { createTheme } from "@mui/material/styles";
import { indigo, red, lightBlue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6464a",
    },
    secondary: {
      main: "#868e96",
    },
    error: {
      main: red.A400,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "'Lexend Deca', sans-serif",
    body1: {
      color: "#495057",
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: indigo[50],
            color: lightBlue[800],
            "&:hover": {
              backgroundColor: indigo[100],
              color: lightBlue[800],
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #dee2e6",
        },
      },
    },
  },
});

theme.spacing(2);

export default theme;
