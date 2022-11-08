import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const notifyActions = notifySlice.actions;
export default notifySlice;
