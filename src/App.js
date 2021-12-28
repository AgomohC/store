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
import { Route, Routes } from "react-router-dom";
const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/checkout" element={<Checkout />} />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
