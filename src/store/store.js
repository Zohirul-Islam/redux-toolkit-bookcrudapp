import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bookReducer from "./bookSlice";
const store = configureStore({
    reducer:{
        counterR:counterReducer,
        bookR:bookReducer
    }
})

export default store