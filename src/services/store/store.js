import { configureStore } from "@reduxjs/toolkit";
import newnoteModalReducer from "./reducers/newnoteModal/newnoteModalSlice";

export const store = configureStore({
  reducer: newnoteModalReducer,
});
