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
               path="/products/:id"
               element={
                  <>
                     <Header />
                     <SingleProductPage />
                     <Footer />
                  </>
               }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
         </Routes>
      </>
   );
};

export default App;
