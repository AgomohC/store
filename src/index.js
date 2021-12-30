import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import store from "./Redux/store";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Router>
               <App />
            </Router>
         </ThemeProvider>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
