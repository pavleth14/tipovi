import { configureStore } from "@reduxjs/toolkit";
import doorSlice from "../features/doorSlice";

export const store = configureStore({
    reducer: {
      doorSlice: doorSlice
    },
  });

  export default store;