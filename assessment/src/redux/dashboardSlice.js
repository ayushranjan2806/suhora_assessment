import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: [],
  // Other dashboard-related state
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDetails(state, action) {
      state.details = action.payload;
    },
    addItem(state, action) {
      state.details.push(action.payload);
    },
    removeItem(state, action) {
      state.details = state.details.filter(item => item.id !== action.payload);
    },
    // Other dashboard-related reducers
  },
});

export const { setDetails, addItem, removeItem } = dashboardSlice.actions;
export default dashboardSlice.reducer;

// Thunk action creators for fetching details, adding, and removing items can be implemented here
