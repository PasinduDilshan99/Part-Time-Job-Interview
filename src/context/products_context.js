import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { data } from "../utils/constants";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
//import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      // const response = await axios.get();
      // const products = response.data;
      const products = data;
      // console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
      // console.log(state.products_error);
    }
  };

  const fetchSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      // const response = await axios.get(url);
      // const singleProduct = response.data;

      const singleProduct = data[id];
      // console.log(singleProduct);
      // console.log("abc");
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  // console.log(state.single_product);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
