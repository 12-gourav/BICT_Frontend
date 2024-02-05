import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
