import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import dashboardSlice from './dashboardSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        dashboard: dashboardSlice,
    },
});

export default store;