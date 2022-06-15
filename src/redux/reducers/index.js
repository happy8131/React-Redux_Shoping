import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const redecers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default redecers;
