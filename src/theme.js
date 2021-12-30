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
      },
      h2: {
         fontFamily: ["Bellefair", "serif"].join(","),
      },
      h3: {
         fontFamily: ["Bellefair", "serif"].join(","),
      },
      h4: {
         fontFamily: ["Bellefair", "serif"].join(","),
      },
      h5: {
         fontFamily: ["Bellefair", "serif"].join(","),
      },
      h6: {
         fontFamily: ["Bellefair", "serif"].join(","),
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
