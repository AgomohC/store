import React, { useEffect } from "react";
import { CartList, ScrollBtn } from "../../Components";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "../../Redux/cartSlice";
const Cart = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCartItems());
   }, [dispatch]);
   return (
      <>
         <CartList />
         <ScrollBtn />
      </>
   );
};

export default Cart;
