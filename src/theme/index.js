import { colors, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d1e9ee"
    },
    text: {
      primary: colors.grey[800]
    }
  }
})


export default theme;