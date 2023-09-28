import { configureStore } from "@reduxjs/toolkit";
import cleaningsReducer from "./cleanings";

export default configureStore({
  reducer: {
    cleanings: cleaningsReducer,
  },
});
