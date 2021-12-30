import React from "react";
import { Footer, Header } from "./Components";
import {
   Account,
   Cart,
   Checkout,
   Home,
   Login,
   Products,
   SignUp,
   SingleProductPage,
} from "./Pages";
import { PrivateRoute } from "./Components";
import { Route, Routes } from "react-router-dom";
const App = () => {
   return (
      <>
         <Routes>
            <Route
               exact
               path="/"
               element={
                  <>
                     <Header />
                     <Home />
                     <Footer />
                  </>
               }
            />
            <Route
               exact
               path="/products"
               element={
                  <>
                     <Header />
                     <Products />
                     <Footer />
                  </>
               }
            />
            <Route
               exact
               path="/account"
               element={
                  <PrivateRoute>
                     <Header />
                     <Account />
                     <Footer />
                  </PrivateRoute>
               }
            />
            <Route
               exact
               path="/cart"
               element={
                  <PrivateRoute>
                     <Header />
                     <Cart />
                     <Footer />
                  </PrivateRoute>
               }
            />
            <Route
               exact
               path="/checkout"
               element={
                  <PrivateRoute>
                     <Header />
                     <Checkout />
                     <Footer />
                  </PrivateRoute>
               }
            />
            <Route
               exact
               path="/products/:id"
               element={
                  <>
                     <Header />
                     <SingleProductPage />
                     <Footer />
                  </>
               }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
         </Routes>
      </>
   );
};

export default App;
