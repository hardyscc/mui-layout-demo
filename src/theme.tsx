import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    fontSize: 12
  },
  spacing: 2,
  props: {
    MuiTextField: {
      fullWidth: true
    }
  },
  overrides: {
    MuiCardContent: {
      root: {
        padding: 10,
        "&:last-child": {
          paddingBottom: 14
        }
      }
    },
    MuiTabs: {
      root: {
        minHeight: 0
      }
    },
    MuiTab: {
      root: {
        minHeight: 0,
        minWidth: 0,
        "@media (min-width:960px)": {
          fontSize: "0.75rem",
          minHeight: 0,
          minWidth: 0
        }
      }
    }
  }
});

export default theme;
