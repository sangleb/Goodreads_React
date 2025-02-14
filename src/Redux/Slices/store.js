import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from 'src/Redux/Slices/AuthSlice'

const store = configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;