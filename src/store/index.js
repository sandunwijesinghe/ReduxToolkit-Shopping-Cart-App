import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import notifySlice from "./notify-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    notify: notifySlice.reducer,
  },
});

export default store;
