import { configureStore } from "@reduxjs/toolkit";
import payments from "../features/payments/store/paymentsSlice";
import expenses from "../features/expenses/store/expensesSlice";

const store = configureStore({
  reducer: {
    payments,
    expenses,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
