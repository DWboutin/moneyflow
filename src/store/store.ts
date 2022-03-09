import { configureStore } from "@reduxjs/toolkit";
import payments from "../features/payments/store/paymentsSlice";

const store = configureStore({
  reducer: {
    payments,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
