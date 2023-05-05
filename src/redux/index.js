import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./reducers/foodSlice"
const store = configureStore({
    reducer: {
        food: foodReducer
    },
});

export default store;
