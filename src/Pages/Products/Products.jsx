import React, { useEffect, useCallback } from "react";
import { Input, ItemList, Categories } from "../../Components";
import { useDispatch } from "react-redux";
import { getCategories, getItems } from "../../Redux/appSlice";
const Products = () => {
   const dispatch = useCallback(useDispatch());

   useEffect(() => {
      dispatch(getCategories());
      dispatch(getItems());
   }, [dispatch]);
   return (
      <>
         <Input />
         <Categories />
         <ItemList />
      </>
   );
};

export default Products;
