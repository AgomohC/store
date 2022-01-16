import React, { useEffect } from "react";
import { CartList } from "../../Components";
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
      </>
   );
};

export default Cart;
