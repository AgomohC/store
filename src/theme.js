import { createTheme } from "@material-ui/core";

const theme = createTheme((theme) => ({
   typography: {
      fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      h1: {
         fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      },
      h2: {
         fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      },
      h3: {
         fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      },
      h4: {
         fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      },
      h5: {
         fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      },
      h6: {
         fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
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
}));

export default theme;
