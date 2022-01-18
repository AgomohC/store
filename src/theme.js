import { createTheme } from "@material-ui/core";

const theme = createTheme({
   typography: {
      fontFamily: [
         "Barlow Condensed",
         "Roboto",
         "Helvetica",
         "Arial",
         "sans-serif",
      ].join(","),
      h1: {
         fontFamily: ["Bellefair", "serif"].join(","),
         fontSize: "150px",
      },
      h2: {
         fontFamily: ["Bellefair", "serif"].join(","),
         fontSize: "100px",
      },
      h3: {
         fontFamily: ["Bellefair", "serif"].join(","),
         fontSize: "56px",
      },
      h4: {
         fontFamily: ["Bellefair", "serif"].join(","),
         fontSize: "32px",
      },
      h5: {
         fontSize: "28px",
         letterSpacing: 4.75,
      },
      h6: {
         fontSize: "28px",
         fontFamily: ["Bellefair", "serif"].join(","),
      },
      body1: {
         letterSpacing: 2.5,
         lineHeight: 1.65,
      },
      body2: {
         letterSpacing: 1.5,
         fontSize: "16px",
      },
      subtitle1: {
         fontSize: "14px",
         letterSpacing: 2.35,
      },
      subtitle2: {
         fontSize: "16px",
         letterSpacing: 2.7,
      },
   },
   palette: {
      primary: {
         main: "#0b0d17",
      },
      secondary: {
         main: "#ffffff",
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 576,
         md: 768,
         lg: 1124,
         xl: 1440,
      },
   },
});

export default theme;
