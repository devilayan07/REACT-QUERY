import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.red";

export const store=configureStore({
    reducer:rootReducer
})
