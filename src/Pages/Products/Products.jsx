import React, { useEffect } from "react";
import { Input, ItemList, Categories, ScrollBtn } from "../../Components";
import { useDispatch } from "react-redux";
import { getCategories, getItems } from "../../Redux/appSlice";

const Products = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCategories());
      dispatch(getItems());
   }, [dispatch]);
   return (
      <>
         <Input />
         <Categories />
         <ItemList />
         <ScrollBtn />
      </>
   );
};

export default Products;
