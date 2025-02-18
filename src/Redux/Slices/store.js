import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'src/Redux/Slices/AuthSlice';
import bookSliceReducer from 'src/Redux/Slices/BookSlice';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        book: bookSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;