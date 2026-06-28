import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./albumSlice";
import songReducer from "./songSlice";
import playerReducer from "./playerSlice";

const store = configureStore({
  reducer: {
    album : albumReducer,
    song : songReducer,
    player : playerReducer
  }
})

export default store;