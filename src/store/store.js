import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./albumSlice";
import songReducer from "./songSlice";
import playerReducer from "./playerSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    album : albumReducer,
    song : songReducer,
    player : playerReducer,
    ui : uiReducer
  }
})

export default store;